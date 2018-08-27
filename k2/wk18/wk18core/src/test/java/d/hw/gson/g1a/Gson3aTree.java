package d.hw.gson.g1a;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class Gson3aTree {
	
    final static Logger logger = Logger.getLogger(Gson3aTree.class);
    
    String url = "http://freemusicarchive.org/api/get/albums.json?api_key=60BLHNQCAOUFPIBZ&limit=5";

    @Test
    public void t1a() {
        logger.info("t1a");
    }

    @Test
    public void t1b() throws MalformedURLException, IOException {
        logger.info("t1b");        
        
        String json = IOUtils.toString(new URL(url));
        
        JsonParser parser = new JsonParser();
        
        // The JsonElement is the root node. 
        // It can be an object, array, null or java primitive.
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

    @Test
    public void t1c() {
        logger.info("t1c");
    }
}