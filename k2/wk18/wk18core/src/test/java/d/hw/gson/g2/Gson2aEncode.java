package d.hw.gson.g2;

import java.util.Arrays;

import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import d.hw.gson.gcas.Gcas;
import d.hw.gson.gcas.GcasTools;
import d.hw.gson.gcas.bean.Question;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class Gson2aEncode {
	
    final static Logger logger = Logger.getLogger(Gson2aEncode.class);

    @Test
    public void t1a() {
        logger.info("t1a");
    }

    @Test
    public void t1b() {
        logger.info("t1b");
        
        Gcas gcas = new Gcas();
        gcas.properties.put("key1", "car driver");
        gcas.properties.put("key2", "boat driver");
        
        Question Q1 = new Question("one","question1");
        Question Q2 = new Question("two","question2");
        gcas.questions = Arrays.asList( new Question [] { Q1, Q2 } );

        String strCas1 = GcasTools.encode(gcas);
        Gcas gcas2 = GcasTools.decode(strCas1);        
        String strCas2 = GcasTools.encode(gcas2);
        System.out.println( strCas1 );
        
        String sEqual = ( strCas1.equalsIgnoreCase(strCas2) ) ? "true" : "false"; 
        System.out.println( sEqual );
    }

    @Test
    public void t1c() {
        logger.info("t1c");
    }
}