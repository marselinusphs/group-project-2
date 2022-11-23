# API SPECIFICATION


# USER

## Get All User

Request :

- Method : GET
- Endpoint : `/user`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 1,
            "name": "Aldi",
            "email": "aldi@gmail.com",
            "password": "aldi123",
            "role_id": 1,
            "createdAt": "2022-11-20T01:31:31.000Z",
            "updatedAt": "2022-11-20T01:31:31.000Z"
        },
        {
            "id": 2,
            "name": "Budi",
            "email": "budi@gmail.com",
            "password": "budi123",
            "role_id": 1,
            "createdAt": "2022-11-20T01:31:31.000Z",
            "updatedAt": "2022-11-20T01:31:31.000Z"
        }
    ]
}
```
## Get User By ID

Request :

- Method : GET
- Endpoint : `/user/:id`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": {
        "id": 1,
        "name": "Aldi",
        "email": "aldi@gmail.com",
        "password": "aldi123",
        "role_id": 1,
        "createdAt": "2022-11-20T01:31:31.000Z",
        "updatedAt": "2022-11-20T01:31:31.000Z"
    }
}
```
## Create Users

Request :

- Method : POST
- Endpoint : `/user`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "email": "dena@gmail.com",
    "name": "dena",
    "password": "dena123"
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 14,
        "name": "dena",
        "email": "dena@gmail.com",
        "password": "$2b$10$RdQsUv0ZmgJ1YR0tAq5N/uGSRNAwYXgqQvFiJIO5jVVzZpCM..Yx2",
        "updatedAt": "2022-11-20T06:14:45.193Z",
        "createdAt": "2022-11-20T06:14:45.193Z"
    }
}
```
## Update Users

Request :

- Method : PUT
- Endpoint : `/user/:id`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "email": "dena@gmail.com",
    "name": "dena",
    "password": "dena123456"
}
```
Response :

```
{
    "message": "success edit data"
}
```
## Delete Users

Request :

- Method : DELETE
- Endpoint : `/user/:id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success delete data"
}
```

# EVENT 

## Get All Event

Request :

- Method : GET
- Endpoint : `/event`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 1,
            "name": "Pergelaran Topeng Topeng",
            "description": "Pergelaran “TOPENG-TOPENG” adalah suatu pertunjukkan seni budaya Indonesia yang diprakarsai oleh Ibu Sukmawati Sukarno dengan mengadaptasi filosofi Tri Hita Karana, yang mencerminkan Tuhan atau Sang Hyang Widhi Wasa, Alam Semesta dan Manusia di bumi ini.\n",
            "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg",
            "date": "2022-11-19",
            "time": "19:00 - 21:00 WIB",
            "location": "Panggung Terbuka Ardha Candra, Bali",
            "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.65562,115.234",
            "price": 50000,
            "createdAt": "2022-11-20T01:31:31.000Z",
            "updatedAt": "2022-11-20T01:31:31.000Z"
        },
        {
            "id": 2,
            "name": "Demo Apresiasi Seni (DEPRESI)",
            "description": "Merupakan salah satu program kerja wajib UKM LUMUT yang paling ditunggu-tunggu. Dalam sejarahnya DEPRESI menjadi sebuah agenda yang menjadi ciri khas dari UKM LUMUT. Sejak tahun 2012 DEPRESI menjadi acara tahunan setiap satu periode kepengurusan. Konsep D",
            "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221021233632_6352ca90545db.jpg",
            "date": "2022-11-19",
            "time": "19:00 - 22:00 WIB",
            "location": "GOR Perjuangan '45 Politeknik Negeri",
            "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.16012,113.721",
            "price": 15000,
            "createdAt": "2022-11-20T01:31:31.000Z",
            "updatedAt": "2022-11-20T01:31:31.000Z"
        }
}
```
## Get Event

Request :

- Method : GET
- Endpoint : `/event/:id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": {
        "id": 1,
        "name": "Pergelaran Topeng Topeng",
        "description": "Pergelaran “TOPENG-TOPENG” adalah suatu pertunjukkan seni budaya Indonesia yang diprakarsai oleh Ibu Sukmawati Sukarno dengan mengadaptasi filosofi Tri Hita Karana, yang mencerminkan Tuhan atau Sang Hyang Widhi Wasa, Alam Semesta dan Manusia di bumi ini.\n",
        "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg",
        "date": "2022-11-19",
        "time": "19:00 - 21:00 WIB",
        "location": "Panggung Terbuka Ardha Candra, Bali",
        "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.65562,115.234",
        "price": 50000,
        "createdAt": "2022-11-20T01:31:31.000Z",
        "updatedAt": "2022-11-20T01:31:31.000Z"
    }
}
```
## Create Event

Request :

- Method : POST
- Endpoint : `/event`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "name": "Pergelaran Baru Baru",
    "description": "Pergelaran “TOPENG-TOPENG” adalah suatu pertunjukkan seni budaya Indonesia yang diprakarsai oleh Ibu Sukmawati Sukarno dengan mengadaptasi filosofi Tri Hita Karana, yang mencerminkan Tuhan atau Sang Hyang Widhi Wasa, Alam Semesta dan Manusia di bumi ini.\n",
    "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg",
    "date": "2022-11-19",
    "time": "19:00 - 21:00 WIB",
    "location": "Panggung Terbuka Ardha Candra, Bali",
    "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.65562,115.234",
    "price": 50000
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 28,
        "name": "Pergelaran Baru Baru",
        "description": "Pergelaran “TOPENG-TOPENG” adalah suatu pertunjukkan seni budaya Indonesia yang diprakarsai oleh Ibu Sukmawati Sukarno dengan mengadaptasi filosofi Tri Hita Karana, yang mencerminkan Tuhan atau Sang Hyang Widhi Wasa, Alam Semesta dan Manusia di bumi ini.\n",
        "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg",
        "date": "2022-11-19",
        "time": "19:00 - 21:00 WIB",
        "location": "Panggung Terbuka Ardha Candra, Bali",
        "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.65562,115.234",
        "price": 50000,
        "updatedAt": "2022-11-20T06:31:16.849Z",
        "createdAt": "2022-11-20T06:31:16.849Z"
    }
}
```
## Update Event

Request :

- Method : PUT
- Endpoint : `/event/:id`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "name": "PPPP Topeng aja",
    "description": "---\n",
    "image": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg",
    "date": "2022-11-19",
    "time": "19:00 - 21:00 WIB",
    "location": "Panggung Terbuka Ardha Candra, Bali",
    "loc_url": "https://www.google.com/maps/search/?api=1&query=-8.65562,115.234",
    "price": 50000
}
```
Response :

```
{
    "message": "success edit data"
}
```
## Delete Event

Request :

- Method : DELETE
- Endpoint : `/event/:id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success delete data"
}
```

# Favorite 

## Get All Favorite

Request :

- Method : GET
- Endpoint : `/user/:id/favorite`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 7,
            "user_id": 3,
            "event_id": 7,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        },
        {
            "id": 8,
            "user_id": 3,
            "event_id": 8,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Get Favorite By Id

Request :

- Method : GET
- Endpoint : `/user/:id/favorite/:favorite_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 8,
            "user_id": 3,
            "event_id": 8,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Create Favorite

Request :

- Method : POST
- Endpoint : `/user/:id/favorite/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "event_id": "10"
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 11,
        "user_id": "3",
        "event_id": "10",
        "updatedAt": "2022-11-20T06:41:03.874Z",
        "createdAt": "2022-11-20T06:41:03.874Z"
    }
}
```
## Delete Favorite

Request :

- Method : DELETE
- Endpoint : `/user/:id/favorite/:favorite_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success delete data"
}
```

# Order 

## Get All Order

Request :

- Method : GET
- Endpoint : `/user/:id/order`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "datetime": "2022-11-19T14:50:05.000Z",
            "event_id": 1,
            "qty": 1,
            "total_price": 50000,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        },
        {
            "id": 2,
            "user_id": 1,
            "datetime": "2022-11-19T14:50:05.000Z",
            "event_id": 2,
            "qty": 1,
            "total_price": 15000,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Get Order By Id

Request :

- Method : GET
- Endpoint : `/user/:id/order/:order_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 2,
            "user_id": 1,
            "datetime": "2022-11-19T14:50:05.000Z",
            "event_id": 2,
            "qty": 1,
            "total_price": 15000,
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Create Order

Request :

- Method : POST
- Endpoint : `/user/:id/order/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "event_id":10,
    "qty":5
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 16,
        "user_id": "2",
        "event_id": 10,
        "qty": 5,
        "total_price": 0,
        "updatedAt": "2022-11-20T04:22:53.072Z",
        "createdAt": "2022-11-20T04:22:53.072Z"
    }
}
```
## Update Order

Request :

- Method : PUT
- Endpoint : `/user/:id/order/:order_id`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "event_id": 20,
    "qty": 10
}
```
Response :

```
{
    "message": "success edit data"
}
```
## Delete Order

Request :

- Method : DELETE
- Endpoint : `/user/:id/order/:order_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success delete data"
}
```
# Review 

## Get All Review

Request :

- Method : GET
- Endpoint : `/event/:id/review`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 1,
            "date": "2022-11-19T14:45:02.000Z",
            "user_id": 1,
            "event_id": 1,
            "star": 5,
            "review": "Bagus banget",
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Get Review By Id

Request :

- Method : GET
- Endpoint : `/event/:id/review/:review_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success get data",
    "data": [
        {
            "id": 1,
            "date": "2022-11-19T14:45:02.000Z",
            "user_id": 1,
            "event_id": 1,
            "star": 5,
            "review": "Bagus banget",
            "createdAt": "2022-11-20T01:31:32.000Z",
            "updatedAt": "2022-11-20T01:31:32.000Z"
        }
    ]
}
```
## Create Review

Request :

- Method : POST
- Endpoint : `/event/:id/review/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "user_id": 5,
    "event_id": 9,
    "star": 5,
    "review": "Bagus banget broo"
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 17,
        "event_id": "19",
        "user_id": 5,
        "star": 5,
        "review": "Bagus banget broo",
        "updatedAt": "2022-11-19T17:52:05.555Z",
        "createdAt": "2022-11-19T17:52:05.555Z"
    }
}
```
## Update Review

Request :

- Method : PUT
- Endpoint : `/event/:id/review/:review_id`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "star": 2,
    "review": "Biasa banget"
}
```
Response :

```
{
    "message": "success edit data"
}
```
## Delete Review

Request :

- Method : DELETE
- Endpoint : `/event/:id/review/:review_id`
- Header :
    - Accept: application/json

Response :

```
{
    "message": "success delete data"
}
```

# AUTH

## Login

Request :

- Method : POST
- Endpoint : `/auth/login/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "email": "be18@gmail.com",
    "password": "be18"
}
```
Response :

```
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJhYmMiLCJlbWFpbCI6ImJlMThAZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNjY4OTI0NzM5LCJleHAiOjE2Njg5NTM1Mzl9.S1eYjXwP2D_2jaoDkJO105RI-JuQ3oGVLmQG4FjJbJQ"
}
```
## Register

Request :

- Method : POST
- Endpoint : `/auth/register/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```
{
    "email": "be18@gmail.com",
    "name": "abc",
    "password": "be18"
}
```
Response :

```
{
    "message": "success insert data",
    "data": {
        "id": 13,
        "name": "abc",
        "email": "be18@gmail.com",
        "password": "$2b$10$ryKt8/TM5KwYqGr2UAH3fu85i8psPX3yJueiwQ8aAcHkV6AIhKHW6",
        "updatedAt": "2022-11-20T04:12:46.842Z",
        "createdAt": "2022-11-20T04:12:46.842Z"
    }
}
```
