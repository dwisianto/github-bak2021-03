
- Getting Started 1
- Getting Started 2
- Getting Started 3
- Getting Started 4

# Getting Started 1

```bash
```

# Getting Started 2

```bash

```

# Getting Started 3


```bash

```

# Getting Started 4


```bash
npm install pug --save
```

Next, we need to tell Express where to look for our template files, and what templating engine we are using. We are going to do this by setting two Express Application Settings, 'views' and 'view engine' by using the app.set method. This method expects two arguments. The first argument is the name of the property we want to update and the second argument is the value.

First we will update the ‘views’ property and set its value to the path to our views directory. Next we will update the ‘view engine’ property of our and set its value to the name of the templating engine we wish to use, in this case ‘pug’. The code to achieve both of these is below:



Pug uses its own special markup syntax. Rather that writing standard HTML <opening> and </closing> tags, all we need to write to represnet an HTML element is the tag name. To nest elements, just create a new line and indent the new tagname.

There are two ways to interpolate dynamic data within our template. Assuming that text is a variable that represents some text, we can interpolate its value and render it in our template like so:

```bash
html
    head
        title= title
    body
        h1= message
```



## Rendering Dynamic Data

Now, jump back into your index.js file and let's add a route for ‘/hello’. Let's make this easy by copy/pasting the code that handles our ‘/’ route and making some adjustments. We will need to change ‘/’ to ‘hello’ and instead of using res.sendfile, we are going to use res.render to render our Pug template. res.render expects two arguments. The first is the name of the template file (as a string with no file extension), and the second is an object that contains the data we want to include in the template. Here is the code to do this:

app.get('/hello', function (req, res) {
  res.render('hello', { title: 'Hello', message: 'Hello there!' })
});

In the res.render method, the object we pass in has a title key and a message key that match the variables in our hello.pug file.

That is all we need to render our dynamic data. When you are finished your index.js file should look like this:

```

var express = require('express');
var app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendfile('index.html');
});

app.get('/hello', function (req, res) {
  res.render('hello', { title: 'Hello', message: 'Hello there!' })
});

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

```


Now, restart your server and go to http://localhost:3000/hello to see your dynamic content rendered. You've just learned the basics of templating with Pug in an Express application! Way to go! In the next post we'll do some refactoring to move some of the code from our index.js file into separate route and controller files. Coming soon!


# Reference


- http://cassandrawilcox.me/