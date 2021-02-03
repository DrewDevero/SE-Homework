package com.example.afternoonlab.service;

import com.example.afternoonlab.model.DBZCharacter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CharacterServiceImp implements CharacterService {

    @Override
    public ArrayList<DBZCharacter> getCharacter() {
        DBZCharacter goku = new DBZCharacter("Goku", 1_234_456, "Kamehameha");
        DBZCharacter vegita = new DBZCharacter("Vegita", 1_048_237, "Galick Gun");
        DBZCharacter jiren = new DBZCharacter("Jiren", 2_875_219, "Stare");

        ArrayList<DBZCharacter> characters = new ArrayList<>();

        characters.add(goku);
        characters.add(vegita);
        characters.add(jiren);

        return characters;
    }
}
