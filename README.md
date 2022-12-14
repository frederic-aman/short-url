## Description

Lunii study case: URL shortener service.

## Installation

### Install database
```bash
$ docker-compose up -d
```

### Install server
```bash
$ npm install
```

## Running

### Development mode
```bash
$ npm run start:dev
```

### Production mode
```bash
$ npm run build
$ npm run start
```

## Test
```bash
$ npm run test
```

## ๐ Useful command lines

### Explore database container

```bash
$ docker exec -it shorturl_postgres_1 bash #enter in container
root@3fb10548154d:/$ psql -h localhost -U postgres #enter in psql interface
postgres=$ \c url #connect to database "url"
url=$ \dt #show list of tables
```

## Usage

You can use [Postman](https://www.postman.com/downloads/) to execute POST and GET requests and visualize responses.

### **Post original URL and retrieve short URL**

Short URLs are 6 characters from [a-z], [A-Z] or [0-9], eg. 5ThNpz

> POST http://localhost:5000/api/shorturl

Body โ๏ธ:
```bash
{
    originalUrl: "https://www.lunii.com"
}
```

Response:
```bash
{
    "originalUrl": "https://www.lunii.com",
    "shortUrl": "5ThNpz"
}
```

Body โ:
```bash
{
    originalUrl: "https://lunii"

}
```

Response:
```bash
{
    "error": "invalid URL"
}
```

### **Solve original URL from short URL**

> GET http://localhost:5000/api/shorturl/5ThNpz โ๏ธ

Response: 

```
Redirect to "https://www.lunii.com 
``` 

> GET http://localhost:5000/api/shorturl/5ThNpz$,ยง โ (special characters)

Response:
```bash
{
    "error": "invalid short URL"
}
```

### **Get all URL with number of solved URL**

> GET http://localhost:5000/api/shorturl/analytics

Response:
```bash
[
    {
        "originalUrl": "https://www.lunii.com",
        "shortUrl": "5ThNpz",
        "nbClicks": 1
    }
]