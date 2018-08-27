
# Java

- [Design Pattern](#design-pattern)
- [Template Patterns](#template-patterns)
- [Gson](#gson)
    - Java to Json and Back 
        - Data Binding
        - [Streaming](#streaming)
        - Tree Representation 
        - Collections Deserialization
        - Generics Deserialization
        - [Type Adapter](#type-adapter)
        - [Custom Serialization And Deserialization](#custom-serialization-and-deserialization)
            - [type adapter vs deserialization](https://stackoverflow.com/questions/30631004/gson-type-adapter-vs-custom-deseralizer)
        - Field Exclusion
    - References
        - https://github.com/google/gson
        - [studyTrails](http://www.studytrails.com/java/json/java-google-json-introduction/) 
        - [gson](https://www.tutorialspoint.com/gson/)
        - [gson-custom](https://medium.com/@int02h/custom-deserialization-with-gson-1bab538c0bfa)
        - [gson-custom2](https://stackoverflow.com/questions/6096940/how-do-i-write-a-custom-json-deserializer-for-gson)
    
    
    
    
## Design Pattern


### Template Patterns
Template pattern is a behavioral pattern that allows part of an algorithm to vary independent of the rest of the algorithm. 
In other words, the bulk of the algorithm logic is defined in a base class (could be abstract) and the part that can change is defined in a derived class. 
Each derived class can then define its own logic for the changing part. 
Use the template pattern when you have multiple algorithms that have mostly common logic but have minor differences. 
The minor differences are extracted out of the base class and into its own derived class.

To illustrate the template pattern we use the example of a car manufacturing algorithm.    

## Gson

Gson is an open source java api for parsing and building json. 
- It has extensive support for java generics. 
- It also provides support for converting third party classes to json. 
- It can be used to serialize and deserialize complex objects with deep hierarchies that may contain generic classes.
    
    
- Data Binding
    - In this example we look at how to bind a Json to a java object. 
    - Gson is quite powerful when it comes to binding a json to Java since it has a lot of built in serializers and deserializers. 
    - A serializer has code that helps in converting a Json string to corresponding java type. 
    - For example if you have an array in JSON (elements enclosed in ‘[‘ and ‘]’) and you want to convert that to a Java array then Gson would internally use an ArrayTypeAdapter to convert the Json Array to Java Array and back. 
    - If you are looking at Gson primarily to parse JSON then we would suggest that you start with a simple Java class, convert that to JSON and make sure it looks like the JSON that you want to parse. 
    - You can then gradually start adding complexities to the java class and at each step convert it to a JSON and ensure that the JSON is similar to the one that you are trying to parse. 
    - It is good to think of parsing a JSON as creating a java class that can give you the JSON that you want to parse. 
    - Also note that you have certain flexibility while creating the java object. 
    - You could represent a Json Array as a Java array or a Java List. 
    - The choice may be driven more by how you want to use the class. 
    - If you map a Json property to a java array Gson would use an Array adapter but if you map it to a List it would use the collection adapter and you, the user, does not have to worry about that. 
    - Gson also handles null gracefully
- Streaming 
    - At certain times you want more control on the way the parsing is done. 
    - Also there may be times when Gson automated conversion does not give you the result that you are looking for. 
    - For example, if you have a List that contains multiple kinds of Object then Gson may not be able to deserialize or parse the Json for you. 
    - In such cases Gson provides a streaming API. 
    - You can use the Streaming API and handle a token at a time. 
    - The token may be start and end of Json Object, start and end of json array, the key of a property and the String or Number value of a property.    
- Tree Representation
    - The first two examples look at how to convert JSON to Java using a data binding and a Streaming API.
    - This tutorial explains a third way to parse JSON, i.e. by building a Java tree representation of the JSON. 
    - The nodes of the tree may either be a JsonObject or a JsonArray. 
    - The JsonObject has methods to retrieve the key-value pairs of the JSON. 
    - The JsonArray provides way to iterate over the elements of the array which are themselves either a JsonObject or a JsonArray.
- Collections
    - Serializing Collections require special treatment since the Collections are of generic type and the type information is lost while converting to JSON due to java type erasure. 
    - Gson handles this by embedding the type in the serialized json.
    - This tutorial explains how to do that.
- Generics
    - In the first example we saw how to bind a java Object to JSON. 
    - However, the example there did not show how Gson can handle classes with generic type.
    - In this example we see how a class with a generic type can be handled. 
    - the idea is to embed the type information in the json itself so that Gson can recreate the Java Object along with the correct generic type while deserializing the JSON.
- Inner Class
    - GSON provides ways to serialize inner classes. The example in this tutorial explains the following:
        - Serializing class containing static nested class
        - Serializing class containing non static nested class (Inner class)
        - De-serializing json to a class containing static and non static inner class
        - Serializing static nested class (without the enclosing type)
        - Serializing non static nested class (without the enclosing type)
        - De-serializing json to a static nested class (without the enclosing type)
        - De-serializing json to a non static nested class (without the enclosing type)
- Custom Type Adapter
    - GSON provides pre-defined type adapters that are called when serializing or deserializing certain java types. 
    - For example an ArrayTypeAdapter is called when Gson encounters a Java Array that needs to be converted to JSON. 
    - In most cases the TypeAdapters provided by GSON would suffice, however in certain cases you may want to write your own adapters. 
    - There are two reasons for doing that 
        - You want to change the default behaviors 
        - GSON does not provide adapter for your class.
- Custom Serialization/Deserialization
    - In the previous example we saw how JSON provides a way to write a custom adapter. 
    - In this example we see how to write a custom serializer or deserializer.
- Field Exclusion
    - Your java class may be used by various other layers of the application. 
    - In some cases your java class may have properties that you want GSON to ignore from serialization.
    - This example provides three ways to exclude properties from serialization and de serialization.
        - Custom annotations
        - Using custom Exclusion Strategies
        - Using @Expose annotation

GoTo: [Top](#java))

### Data Binding 

GoTo: [Top](#java))

### Streaming


In This tutorial we see how to parse json and obtain individual tokens. 


- Although this may seem like a cumbersome way to build java object from json, however it is extremely powerful and may be a good choice if you need a very high level of control over the parsing. 
- We use the JsonReader class to read the json as a stream of tokens. 
- The beginning of an object or an array is also a token. Here’s a detailed example.


````
import java.io.IOException;
import java.io.StringReader;
import java.net.MalformedURLException;
import java.net.URL;
 
import org.apache.commons.io.IOUtils;
 
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
 
public class ParseTokenExample7
{
    public static void main(String[] args) throws MalformedURLException, IOException
    {
        String url = "http://freemusicarchive.org/api/get/albums.json?api_key=60BLHNQCAOUFPIBZ&limit=1";
        String json = IOUtils.toString(new URL(url));
        // use the reader to read the json to a stream of tokens
        JsonReader reader = new JsonReader(new StringReader(json));
        // we call the handle object method to handle the full json object. 
        // This implies that the first token in JsonToken.BEGIN_OBJECT, which is always true.
        handleObject(reader);
    }
 }
 ```


Handle an Object. 

- Consume the first token which is BEGIN_OBJECT.
- Within the Object there could be array or non array tokens.
- We write handler methods for both.
- Note the peek() method is used to find out the type of the next token without actually consuming it.  
     
 ````
    private static void handleObject(JsonReader reader) throws IOException
    {
        reader.beginObject();
        while (reader.hasNext()) {
            JsonToken token = reader.peek();
            if (token.equals(JsonToken.BEGIN_ARRAY))
                handleArray(reader);
            else if (token.equals(JsonToken.END_OBJECT)) {
                reader.endObject();
                return;
            } else
                handleNonArrayToken(reader, token);
        }
 
    }
````
 
 
Handle a json array.
 
- The first token would be JsonToken.BEGIN_ARRAY.
- Arrays may contain objects or primitives.
 
 
````     
    public static void handleArray(JsonReader reader) throws IOException {     
        reader.beginArray();
        while (true) {
            JsonToken token = reader.peek();
            if (token.equals(JsonToken.END_ARRAY)) {
                reader.endArray();
                break;
            } else if (token.equals(JsonToken.BEGIN_OBJECT)) {
                handleObject(reader);
            } else if (token.equals(JsonToken.END_OBJECT)) {
                reader.endObject();
            } else
                handleNonArrayToken(reader, token);
        }
    }
```` 
 

Handle non array non object tokens


````          
    public static void handleNonArrayToken(JsonReader reader, JsonToken token) throws IOException { 
        if (token.equals(JsonToken.NAME))
            System.out.println(reader.nextName());
        else if (token.equals(JsonToken.STRING))
            System.out.println(reader.nextString());
        else if (token.equals(JsonToken.NUMBER))
            System.out.println(reader.nextDouble());
        else
            reader.skipValue();
    }
}
````



        
### Tree Representation


In this tutorial, we build a tree of com.google.gson.JsonElement from the json string.

 
- The tree can then be traversed to build java objects. 
- JsonElement has methods such as isJsonObject(), isJsonNull(), etc that can be used to figure out the type of JsonElement. 
- Then to get the actual object use the getAsJsonObject(), getAsJsonPrimitive() etc methods. 
- We parse the response from the free music archive json API. 

Here’s the class


````
package com.studytrails.json.gson;
 
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
 
import org.apache.commons.io.IOUtils;
 
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ParseTreeExample6 {

    public static void main(String[] args) throws MalformedURLException, IOException {
    
        String url = "http://freemusicarchive.org/api/get/albums.json?api_key=60BLHNQCAOUFPIBZ&limit=5";
        String json = IOUtils.toString(new URL(url));
        JsonParser parser = new JsonParser();
        // The JsonElement is the root node. It can be an object, array, null or
        // java primitive.
        JsonElement element = parser.parse(json);
        // use the isxxx methods to find out the type of jsonelement. 
        
        // In our example we know that the root object is the Albums object and
        // contains an array of dataset objects
        if (element.isJsonObject()) {
            JsonObject albums = element.getAsJsonObject();
            System.out.println(albums.get("title").getAsString());
            JsonArray datasets = albums.getAsJsonArray("dataset");
            for (int i = 0; i < datasets.size(); i++) {
                JsonObject dataset = datasets.get(i).getAsJsonObject();
                System.out.println(dataset.get("album_title").getAsString());
            }
        }
 
    }
}
 
````





### Collections

Serializing Collections should have been similar to serializing other objects. 
However, the problem is that Collections are generic and the generic type information is not maintained in the json. 
We therefore pass the type while deserializing list. 
Note that if the Collection has different types of objects then there is no way to serialize it.

````
package com.studytrails.json.gson;
 
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
 
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
 
public class DeSerializeListExample5 {
    public static void main(String[] args) {
        String json = "[{album_id:1,album_title:'album1'},{album_id:2,album_title:'album2'}]";
 
        Gson gson = new Gson();
        // create the type for the collection. In this case define that the collection is of type Dataset
        Type datasetListType = new TypeToken<Collection<Dataset>>() {}.getType();
        List<Dataset> datasets = gson.fromJson(json, datasetListType);
        for (Dataset dataset : datasets) {
            System.out.println(dataset.getAlbum_title());
            System.out.println(dataset.getAlbum_id());
        }
        // Prints
        //album1
        //1
        //album2
        //2
         
    }
}
````



````
package com.studytrails.json.gson;
 
import java.util.HashMap;
import java.util.Map;
 
public class Dataset {
    private String album_id;
    private String album_title;
    private Map<String , Object> otherProperties = new HashMap<String , Object>();
 
    public String getAlbum_id() {
        return album_id;
    }
 
    public void setAlbum_id(String album_id) {
        this.album_id = album_id;
    }
 
    public String getAlbum_title() {
        return album_title;
    }
 
    public void setAlbum_title(String album_title) {
        this.album_title = album_title;
    }
 
    public Object get(String name) {
        return otherProperties.get(name);
    }
 
}
````

### Generics



### Inner Class


### Type Adapter

You want to control how the java object is converted to json string and the other way round. 
- Gson provides a capability to specify a custom type adapter. 
- You tell Gson that for a particular class, use the conversion strategy specified by your custom adapter. 

Lets look at how to write the type adapter : 
- To write a custom adapter extend the com.google.gson.TypeAdapter abstract class.  
    - Implement the public abstract T read(JsonReader in) throws IOException; and 
    - Implement the public abstract void write(JsonWriter out, T value) throws IOException; methods.
- The adapter should also handle nulls. 
- Create the Type adapter instance and then register it with the GsonBuilder. 
- Create the Gson object from the GsonBuilder and then use that to serialize and deserialize. 

Lets look at an example:

#### Main

````
package com.studytrails.json.gson;
 
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
 
import org.apache.commons.io.IOUtils;
 
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
 
public class DatasetTypeAdapterExample8 {
 
    public static void main(String[] args) throws MalformedURLException, IOException {
        String url = "http://freemusicarchive.org/api/get/albums.json?api_key=60BLHNQCAOUFPIBZ&limit=5";
        String json = IOUtils.toString(new URL(url));

        // Create the custom type adapter and register it with the GsonBuilder class.
        Gson gson = new GsonBuilder().registerTypeAdapter(Dataset.class, new DatasetTypeAdapter()).create();

        // Deserialize the json to Albums class. 
        // The Dataset objects are part of the Albums class. 
        // Whenever Gson encounters an object of type DataSet
        // it calls the DatasetTypeAdapter to read and write json.
        Albums albums = gson.fromJson(json, Albums.class);
        System.out.println(albums.getDataset()[1].getAlbum_title());
        // prints
        // http://freemusicarchive.org/music/The_Yes_Sirs/Through_The_Cracks_Mix_Vol_1/
    }
}    
````

#### Adapter

The Dataset class contains the information about a particular Album.
 - album_title and album_url are two distinct fields in the json. 
 - The Dataset object contains the field album_title. 
 - Normally Gson would map the album_title property in the json the the album_title field in the Dataset object. 
 
 However, we don't want that. 
 - We want to use the album_url property from the json object to populate the album_title field in the Dataset object.
 - we build a custom TypeAdapter to do that. 
 - This is just a trivial case, you could also combine album_url and album_title properties and set it to the
 - album_title field of the Dataset Object.

````
package com.studytrails.json.gson;
 
import java.io.IOException;
 
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;
 

public class DatasetTypeAdapter extends TypeAdapter<Dataset> {
    @Override
    public Dataset read(JsonReader reader) throws IOException {
        // the first token is the start object
        JsonToken token = reader.peek();
        Dataset dataset = new Dataset();
        if (token.equals(JsonToken.BEGIN_OBJECT)) {
            reader.beginObject();
            while (!reader.peek().equals(JsonToken.END_OBJECT)) {
                if (reader.peek().equals(JsonToken.NAME)) {
                    if (reader.nextName().equals("album_url"))
                        dataset.setAlbum_title(reader.nextString());
                    else
                        reader.skipValue();
 
                }
            }
            reader.endObject();
 
        }
        return dataset;
    }
 
    @Override
    public void write(JsonWriter out, Dataset value) throws IOException {
 
    }
 
}
````

#### Album

````
package com.studytrails.json.gson;
 
public class Albums {
 
    private String title;
    private Dataset[] dataset;
 
    public void setTitle(String title) {
        this.title = title;
    }
 
    public void setDataset(Dataset[] dataset) {
        this.dataset = dataset;
    }
 
    public String getTitle() {
        return title;
    }
 
    public Dataset[] getDataset() {
        return dataset;
    }
}
````

#### Dataset

````
package com.studytrails.json.gson;
 
import java.util.HashMap;
import java.util.Map;
 
public class Dataset {
    private String album_id;
    private String album_title;
    private Map<String , Object> otherProperties = new HashMap<String , Object>();
 
    public String getAlbum_id() {
        return album_id;
    }
 
    public void setAlbum_id(String album_id) {
        this.album_id = album_id;
    }
 
    public String getAlbum_title() {
        return album_title;
    }
 
    public void setAlbum_title(String album_title) {
        this.album_title = album_title;
    }
 
    public Object get(String name) {
        return otherProperties.get(name);
    }
 
}
````


GoTo: [Top](#java)



### Custom Serialization And Deserialization

Register 

- a custom serializer with the GsonBuilder if you need you own way to convert a java object to json; and 
- you a custom deserializer if you don't like Gson’s way of converting json to the java object. 
- The first example below shows a custom serializer; and 
- The second example shows a custom deserializer.


#### Custom Serializer

Create a custom serializer by 
    - implementing a com.studytrails.json.gson.JsonSerializer and 
    - implementing the public JsonElement serialize(T src, Type typeOfSrc, JsonSerializationContext context); method. 
       - src is the source object and 
       - Type is the type of the source object. 

The example below demonstrates a custom Serializer.

````
package com.studytrails.json.gson;
 
import java.lang.reflect.Type;
 
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import com.google.gson.reflect.TypeToken;
 
public class DogSerializer implements JsonSerializer<dog> {

    @Override
    public JsonElement serialize(Dog src, Type typeOfSrc, JsonSerializationContext context) {
        // This method gets involved whenever the parser encounters the Dog
        // object (for which this serializer is registered)
        JsonObject object = new JsonObject();
        String name = src.getName().replaceAll(" ", "_");
        object.addProperty("name", name);
        // we create the json object for the dog and send it back to the Gson serializer        
        return object;
    }
 
    public static void main(String[] args) {
    
        Dog dog = new Dog("I am a dog");
    
        Animall<Dog> animal = new Animall<Dog>();        
        animal.setAnimal(dog);
        
        // Create the GsonBuilder and register a serializer for the Dog class.
        // Whenever the Dog class is encountered Gson calls the DogSerializer
        // we set pretty printing own to format the json
        Gson gson = new GsonBuilder().registerTypeAdapter(Dog.class, new DogSerializer()).setPrettyPrinting().create();
        
        // Since Animal contains generic type create the type using TypeToken class.
        Type animalType = new TypeToken<Animal<Dog>>() {}.getType();        
        System.out.println(gson.toJson(animal, animalType));
    }
}
````

````
package com.studytrails.json.gson;
 
public class Animal<t> {
 
    public T animal;
 
    public void setAnimal(T animal) {
        this.animal = animal;
    }
 
    public T get() {
        return animal;
    }
 
}
````

````
package com.studytrails.json.gson;
 
public class Dog {
    private String name;
 
    public Dog(String name) {
        this.name = name;
    }
 
    public String getName() {
        return name;
    }
 
}
````


#### Custom Deserialization


````
package com.studytrails.json.gson;
 
import java.lang.reflect.Type;
 
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import com.google.gson.reflect.TypeToken;
 
public class DogDeserialiser implements JsonDeserializer<Dog> {
    @Override
    public Dog deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        String name = json.getAsJsonObject().get("name").getAsString();
        name = name.replace(" ", "_");
        Dog dog = new Dog(name);
 
        return dog;
    }
 
    public static void main(String[] args) {
        String json = "{\"animal\":{\"name\":\"I am a dog\"}}";
        Gson gson = new GsonBuilder().registerTypeAdapter(Dog.class, new DogDeserialiser()).create();
        Type animalType = new TypeToken<Animal<Dog>>() {
        }.getType();
        Animal<Dog> animal = gson.fromJson(json, animalType);
        System.out.println(animal.get().getName());
    }
 
}
````

GoTo: [Top](#java)





## Template


| column | column | column | column |
|--------|--------|--------|--------|
| type | | | |
| isinstance | | |
| locals | | |
| globals | | | 

GoTo [Top](#java)
