package org.debuggingIntro;

import java.util.*;

public class TestThis {
    ArrayList<String> names = new ArrayList<String>(Arrays.asList(
            new String[]{"Mike", "Bairon", "Tony"}
    ));
    public String getNamesAtIndex(int index){
        return names.get(index);
    }
    public void addName(String name){
        names.add(name);
    }
    public ArrayList<String> getNames() {
        return names;
    }
}
