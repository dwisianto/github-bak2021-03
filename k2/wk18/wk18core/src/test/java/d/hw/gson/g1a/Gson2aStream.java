/**
 * 
 * In This tutorial we see how to parse json and obtain individual tokens. 
 * Although this may seem like a cumbersome way to build java object from json, 
 * however it is extremely powerful and may be a good choice 
 * if you need a very high level of control over the parsing. 
 * We use the JsonReader class to read the json as a stream of tokens. 
 * The beginning of an object or an array is also a token.
 *  
 */

package d.hw.gson.g1a;

import java.io.IOException;
import java.io.StringReader;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class Gson2aStream {
	
    final static Logger logger = Logger.getLogger(Gson2aStream.class);
    
    //String url = "http://freemusicarchive.org/api/get/albums.json?api_key=60BLHNQCAOUFPIBZ&limit=1";
    //String url = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923+656659";
    //String url = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923";
    //String url = "https://rxnav.nlm.nih.gov/REST/rxcui.json?idtype=NDC&id=11523-7020-1";
    //String url = "https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=BN";
    String url = "https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=BPCK";


    @Test
    public void t1a() {
        logger.info("t1a");
    }

    @Test
    public void t1b() throws MalformedURLException, IOException {
        logger.info("t1b");

        String jsonStr = IOUtils.toString(new URL(url));
        System.out.println( jsonStr.length() );
        
        // use the reader to read the json to a stream of tokens
        JsonReader reader = new JsonReader(new StringReader(jsonStr));
        
        // the handle object method processes the full json object. 
        // This implies that the first token in JsonToken.BEGIN_OBJECT, which is always true.
        handleObject(reader);
    }
 
    /**
     * Handle an Object. Consume the first token which is BEGIN_OBJECT. 
     * Within the Object there could be array or non array tokens. 
     * We write handler methods for both. 
     * Now the peek() method. 
     * It is used to find out the type of the next token without actually consuming it.
     *
     * @param reader
     * @throws IOException
     */
    private static void handleObject(JsonReader reader) throws IOException {
    	
        reader.beginObject();
        while (reader.hasNext()) {
            JsonToken token = reader.peek();
            if (token.equals(JsonToken.BEGIN_ARRAY)) { 
                handleArray(reader);
            } else if (token.equals(JsonToken.END_OBJECT)) {
                reader.endObject();
                return;
            } else { 
                handleNonArrayToken(reader, token);
            } 
        }
 
    }
 
    /**
     * Handle a json array. The first token would be JsonToken.BEGIN_ARRAY.
     * Arrays may contain objects or primitives.
     *
     * @param reader
     * @throws IOException
     */
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
 
    /**
     * Handle non array non object tokens
     *
     * @param reader
     * @param token
     * @throws IOException
     */
    public static void handleNonArrayToken(JsonReader reader, JsonToken token) throws IOException { 

        if (token.equals(JsonToken.NAME)) { 
            System.out.println(reader.nextName());
        } else if (token.equals(JsonToken.STRING)) { 
            System.out.println(reader.nextString());
        } else if (token.equals(JsonToken.NUMBER)) { 
            System.out.println(reader.nextDouble());
        } else { 
        		System.out.println( " Skipping "+ reader);
            reader.skipValue();
        }
        
    }    

    @Test
    public void t1c() {
        logger.info("t1c");
    }
}