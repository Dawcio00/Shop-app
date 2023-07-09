package com.example.demo.model;


import jakarta.persistence.*;


@Entity
@Table(name = "shopitems")
public class ShopItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private Double price;

    @Column(name="image")
    private String image;

    public ShopItem(String name, Double price, String image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public ShopItem() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
