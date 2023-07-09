package com.example.demo.model;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name = "order_items",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "item_id") }
    )
    private List<ShopItem> items;

    private String date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    public Order() {
    }

    public Order(List<ShopItem> items, User user, String date) {
        this.items = items;
        this.user = user;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ShopItem> getItems() {
        return items;
    }

    public void setItems(List<ShopItem> items) {
        this.items = items;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
