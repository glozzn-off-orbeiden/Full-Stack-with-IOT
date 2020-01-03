
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
//const char* ssid = "HOTSPOT HG";
//const char* password = "";
//const char* ssid     = "DCI Students";
//const char* password = "7jYq4y5Sf5K2xX";
//const char* mqtt_server = "172.31.32.160";
const char* ssid     = "o2-WLAN72";
const char* password = "78874N7T494FUVV9";
const char* mqtt_server = "192.168.1.5";
bool currentState = false;
char clientRSSI[50];
void mqttCallback(char* topic, byte* payload, unsigned int length);

fauxmoESP fauxmo;
WiFiClient espClient;
PubSubClient client(mqtt_server, 1883, mqttCallback, espClient);
void mqttCallback(char* topic, byte* payload, unsigned int length) {
}
int ledPin = 13; // choose the pin for the LED
int inPin = 16;   // choose the input pin (for a pushbutton)
int val = 0;     // variable for reading the pin status

void setup() {
  WiFi.disconnect(true);
  pinMode(ledPin, OUTPUT);  // declare LED as output
  pinMode(inPin, INPUT);    // declare pushbutton as input
  Serial.begin(115200);
  Serial.println(ssid);
  Serial.println(WiFi.status());
  Serial.println(WiFi.localIP());
  WiFi.mode(WIFI_STA);
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println(ssid);
    Serial.println(WiFi.status());
    Serial.println(WiFi.localIP());
    reconnectWifi();
  }

  if (!client.connected()) {
    Serial.println(ssid);
    Serial.println(WiFi.status());
    Serial.println(WiFi.localIP());
    Serial.println("Succses!");
    reconnectMQTT();
  }


}
void loop() {
  WiFi.mode(WIFI_STA);
  //Serial.print(WiFi.status());
  if (WiFi.status() != WL_CONNECTED)
    reconnectWifi();

  if (!client.connected())
    reconnectMQTT();

  val = digitalRead(inPin);  // read input value
  if (val == LOW) {         // check if the input is HIGH (button released)
    digitalWrite(ledPin, LOW);  // turn LED OFF

  } else {
    digitalWrite(ledPin, HIGH);  // turn LED ON
    Serial.println("Button pressed!");
    client.publish("Doorbell/ON", "on");
    delay(1500);
  };
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
    } else {
      Serial.println("reconnect MQTT...");
      delay(1000);
    }
  }
}
