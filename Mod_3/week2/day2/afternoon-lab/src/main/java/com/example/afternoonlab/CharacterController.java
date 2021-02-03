package com.example.afternoonlab;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.afternoonlab.model.DBZCharacter;
import com.example.afternoonlab.service.CharacterService;

import java.util.ArrayList;

@RestController
@RequestMapping("/characters")
public class CharacterController {
    @Autowired
    CharacterService characterService;
    @GetMapping
    public ArrayList<DBZCharacter> getCharacter() {
        return characterService.getCharacter();
    }
}
