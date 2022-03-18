import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("/Users/olsenbudanur/Desktop/Class Material/Club/Hackathons/BisonHacks2022/backend/firebaseKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# doc_ref = db.collection(u'UserData').document(u'FERRCOj0mokLX3KZFqIl')

doc_ref = db.collection(u'UserData')
doc2 = doc_ref.get()

userdata = []

for doc in doc2:
    userdata.append(doc2)
    if doc.exists:
        print(f'Document data: {doc.to_dict()}')
    else:
        print(u'No such document!')


# arch -x86_64 /bin/bash