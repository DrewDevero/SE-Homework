package com.example.server.model;

import javax.persistence.*;

// this will be a table in sql mexican_food
// record/entry id, dishName, spicy, vegetarian, protein
// { id: 12, dishName: "enchilada", spicy: true, vegetarian: false, protein: chicken }
// { id: 12, dishName: "enchilada", spicy: true, vegetarian: false, protein: chicken }

@Entity
@Table(name = "mexican_food")
public class Mexican {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String dishName;

    @Column
    private Boolean spicy;

    @Column
    private Boolean vegetarian;

    @Column
    private String protein;

    public Mexican() {}

    public Long getId() { return id; }

    public void setId() { this.id = id; }

    public String getDishName() {
            return dishName;
        }

    public void setDishName(String dishName) {
            this.dishName = dishName;
        }

    public Boolean getSpicy() {
        return spicy;
    }

    public void setSpicy(Boolean spicy) {
            this.spicy = spicy;
    }

    public Boolean getVegetarian() {
            return vegetarian;
    }

    public void setVegetarian() {
        this.vegetarian = vegetarian;
    }

    public String getProtein() { return protein; }

    public void setProtein() {
        this.protein = protein;
    }

}
