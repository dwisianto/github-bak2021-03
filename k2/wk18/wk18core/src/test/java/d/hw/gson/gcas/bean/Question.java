package d.hw.gson.gcas.bean;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.SerializedName;

public class Question {
	
	String txt ;
	
	String id;
	
	@SerializedName("answer_final")	
	List<Answer> answerFinal = new ArrayList<Answer>();
	
	public Question(String sId, String sTxt) {
		id = sId;
		txt = sTxt;
	}

}
