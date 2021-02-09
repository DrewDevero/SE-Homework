package com.example.server.controller;

import com.example.server.model.Mexican;
import com.example.server.service.MexicanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/mexican")
// http://localhost:8080/mexican navigation
public class MexicanController {

    @Autowired
    MexicanService mexicanService;

    @GetMapping
    public Iterable<Mexican> getDishes() {
        return mexicanService.getDishes();
    }

    @PostMapping
    public Mexican createDish(@RequestBody Mexican dish) {
        return mexicanService.createDish(dish);
    }

    @PatchMapping
    public Mexican updateDish(@RequestBody Mexican dish) { return mexicanService.updateDish(dish); }

    @DeleteMapping(value = "/posts/{id}")
    public Mexican deleteDish(@PathVariable Long id) { return mexicanService.deleteDish(id); }
}
