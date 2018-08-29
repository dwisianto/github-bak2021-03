package d.hw.gson.gcas;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.annotations.SerializedName;

import d.hw.gson.gcas.bean.Question;

public class Gcas {
			
	
	@SerializedName("properties")	
	public Map<String,String> properties = new HashMap<String,String>();
	
	@SerializedName("questions")	
	public List<Question> questions = new ArrayList<Question>();
	
	

}
