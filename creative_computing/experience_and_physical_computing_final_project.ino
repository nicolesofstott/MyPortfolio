#include <SPI.h>

#include <Ethernet.h>

// cloud coverage API 
char server[] = "api.open-meteo.com";
char path[] = "v1/forecast?latitude=40.42&longitude=-3.70&hourly=cloudcover";

const int ledPin1 = 2; // green LED
const int ledPin2 = 3; // red LED

// values that change which lights are on
const int lowThreshold = 34;
const int highThreshold = 66;

// ethernet configuration (needed help)
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
EthernetClient client;

void setup()
{
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);

  Serial.begin(9600);

  // ethernet connects
  Ethernet.begin(mac);

 
  Serial.print("IP address: ");
  Serial.println(Ethernet.localIP());
}

void loop()
{
  if (client.connect(server, 80))
  {
    // make HTTP GET request
    client.println("GET " + String(path) + " HTTP/1.1");
    client.println("Host: " + String(server));
    client.println("Connection: close");
    client.println();

    
    while (client.connected())
    {
      if (client.available())
      {
        String response = client.readStringUntil('\n');

        // check if the response contains cloud cover data
        if (response.startsWith("\"cloudcover\":"))
        {
          int cloudCover = parseCloudCover(response);

          // control LEDs depending on cloud coverage
          controlLEDs(cloudCover);

          Serial.print("Cloud Coverage: ");
          Serial.print(cloudCover);
          Serial.println("%");

          break;
        }
      }
    }
    client.stop();
  }
  else
  {
    Serial.println("Failed to connect to server");
  }

  delay(60000); // delay for 60s to prevent flickering
}

int parseCloudCover(const String &response)
{
  int start = response.indexOf("\"cloudcover\":") + 14;
  int end = response.indexOf(',', start);
  String valueString = response.substring(start, end);
  return valueString.toInt();
}

void controlLEDs(int cloudCover)
{
  digitalWrite(ledPin1, LOW);
  digitalWrite(ledPin2, LOW);

  if (cloudCover < lowThreshold)
  {
    digitalWrite(ledPin1, HIGH);
  }
  else if (cloudCover > highThreshold)
  {
    digitalWrite(ledPin2, HIGH);
  }
  else
  {
    digitalWrite(ledPin1, HIGH);
    digitalWrite(ledPin2, HIGH);
  }
}

