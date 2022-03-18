from twilio.rest import Client


account_sid = 'AC64ce57a561dd17c16c71b020a10b0392'
auth_token = '51033b2c5ca111f7d68ab778eb26db5a'
twilio_number = '+19373586771'

send_to = '+12408104360'

client = Client(account_sid, auth_token)

message = client.messages.create(
    body = "This is a new message",
    from_ = twilio_number,
    to = send_to
)