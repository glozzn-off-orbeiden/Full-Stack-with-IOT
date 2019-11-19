
#include <WiFiClientSecure.h>

#include <WiFiClient.h>
#include <WiFiServer.h>
#include <WiFiServerSecure.h>

#include <ESP8266WiFiMulti.h>
#include <WiFiUdp.h>
#include <ESP8266WiFi.h>





#include <DebugPrintMacros.h>
#include <async_config.h>
#include <AsyncPrinter.h>
#include <SyncClient.h>
#include <tcp_axtls.h>
#include <ESPAsyncTCPbuffer.h>
#include <ESPAsyncTCP.h>

#include <fauxmoESP.h>
#include <WeMo.h>
#include <PubSubClient.h>


#include <ESP8266HTTPClient.h>
#include <ESP8266httpUpdate.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>
#include <WiFiServer.h>
#include <WiFiUdp.h>




const char* FIRMWARE_VERSION = "1.0";
const char* ssid     = "DCI Students";
const char* password = "2FYDfSgTNEby5UFWjwpL";
const char* mqtt_server = "172.31.32.78";
bool currentState = false;
char clientRSSI[50];
// void mqttCallback(char* topic, byte* payload, unsigned int length);
void mqttCallback(char* topic, byte* payload, unsigned int length) {
}
fauxmoESP fauxmo;
WiFiClient espClient;
PubSubClient client(mqtt_server, 1883, mqttCallback, espClient);

void setup() {
  Serial.begin(115200);
  Serial.println(ssid);
  Serial.println(WiFi.status());
  Serial.println(WiFi.localIP());
  WiFi.mode(WIFI_STA);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println(ssid);
    Serial.println(WiFi.status());
    Serial.println(WiFi.localIP());
    //Serial.print(WiFi.status());
    reconnectWifi();
  }

  if (!client.connected()) {
    Serial.println(ssid);
    Serial.println(WiFi.status());
    Serial.println(WiFi.localIP());
    Serial.println("Succses!");
    reconnectMQTT();
  }

  fauxmo.addDevice("Aussenlicht");
  Serial.print("test2");
  fauxmo.enable(true);
  fauxmo.onSetState([](unsigned char device_id, const char * device_name, bool state) {
    currentState = state;
    // set any GPIO pin here

    if (state)
      client.publish("sensors/status", "ON");
    else
      client.publish("sensors/status", "OFF");
  });

  fauxmo.onGetState([](unsigned char device_id, const char * device_name) {
    return currentState;
  });
}
void loop() {
  WiFi.mode(WIFI_STA);
  Serial.print(WiFi.status());
  if (WiFi.status() != WL_CONNECTED)
    reconnectWifi();

  if (!client.connected())
    reconnectMQTT();

  fauxmo.handle();
  client.loop();
  delay(0);
}
void reconnectWifi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }

  String str = String(WiFi.RSSI());
  str.toCharArray(clientRSSI, str.length() + 1);
}
void reconnectMQTT() {
  while (!client.connected()) {
    if (client.connect("sensor1", "sensors/health", 0, true, "offline")) {
      Serial.println("MQTT succsess!");
      client.publish("sensors/rssi", clientRSSI);
      client.publish("sensors", "started");
      client.publish("sensors/health", "online", true);
      client.publish("sensors/version", FIRMWARE_VERSION);
    } else
      delay(1000);
  }
}
