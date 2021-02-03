package com.example.afternoonlab.model;

public class DBZCharacter {
    public String name;
    public int powerLevel; // I'll keep it in the billions even thought power scaling by Dragon Ball Super is always "off the charts!!!"
    public String mainAttack;

    public DBZCharacter(String name, int powerLevel, String mainAttack) {
        this.name = name;
        this.powerLevel = powerLevel;
        this.mainAttack = mainAttack;
    }
}
