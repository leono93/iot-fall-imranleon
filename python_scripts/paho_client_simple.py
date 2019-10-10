import paho.mqtt.client as mqtt
import time

broker_address="localhost"

def on_connect(client, userdata, flags, rc):
    print(rc)
    print("Connection Successful")

def on_subscribe(client, userdata, mid, qos):
    print("subscribed")

def on_message(client, userdata, message):
    print("Message received")
    topic=msg.topic
    print("Topic of the message is: " + topic )



print("creating new instance")
client=mqtt.Client("linux_client")

print("connecting to broker")
client.connect(broker_address)
client.on_connect=on_connect
client.on_subscribe=on_subscribe
client.on_message=on_message

#client.loop_forever()

client.loop_start()
client.subscribe("sensor/json")
time.sleep(30)
client.loop_stop()

