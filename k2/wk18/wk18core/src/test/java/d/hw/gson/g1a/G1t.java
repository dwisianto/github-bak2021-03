package d.hw.gson.g1a;

import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class G1t {
	
    final static Logger logger = Logger.getLogger(G1t.class);

    @Test
    public void t1a() {
        logger.info("t1a");
    }

    @Test
    public void t1b() {
        logger.info("t1b");
    }

    @Test
    public void t1c() {
        logger.info("t1c");
    }
}