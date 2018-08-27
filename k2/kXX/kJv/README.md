
# Java

- [Why use it?](#why-use-it)
- [How to use it](#how-to-use-it)
- [Design Pattern](#design-pattern)
- [Template Patterns](#template-patterns)
- [Gson](#gson)
    - Java to Json and Back 
        - Data Binding
        - Streaming
        - Tree Representation 
        - List Deserialization
        - Generic Deserialization
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

GoTo: [Top](#java)


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
        // we create the json object for the dog and send it back to the
        // Gson serializer
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



## Why use it?

When I started this project, I didn't know a stack from a heap, didn't know Big-O anything, anything about trees, or how to
traverse a graph. If I had to code a sorting algorithm, I can tell ya it wouldn't have been very good.
Every data structure I've ever used was built into the language, and I didn't know how they worked
under the hood at all. I've never had to manage memory unless a process I was running would give an "out of
memory" error, and then I'd have to find a workaround. I've used a few multidimensional arrays in my life and
thousands of associative arrays, but I've never created data structures from scratch.

It's a long plan. It may take you months. If you are familiar with a lot of this already it will take you a lot less time.

## How to use it

Everything below is an outline, and you should tackle the items in order from top to bottom.

I'm using Github's special markdown flavor, including tasks lists to check progress.

## Template


| column | column | column | column |
|--------|--------|--------|--------|
| type | | | |
| isinstance | | |
| locals | | |
| globals | | | 

GoTo [Top](#java)
