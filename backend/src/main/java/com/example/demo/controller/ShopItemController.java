package com.example.demo.controller;

import com.example.demo.model.ShopItem;
import com.example.demo.services.ShopItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/shopItems")
public class ShopItemController {

    private final ShopItemService shopItemService;

    public ShopItemController(ShopItemService shopItemService) {
        this.shopItemService = shopItemService;
    }

    @GetMapping("/items")
    public ResponseEntity<List<ShopItem>> getAllOrders() {
        List<ShopItem> shopItems = shopItemService.getShopItems();
        return new ResponseEntity<>(shopItems, HttpStatus.OK);
    }

    @PostMapping("/item")
    public ResponseEntity<ShopItem> addOrder(@RequestBody ShopItem shopItem) {
        ShopItem shopItem_ = shopItemService.addShopItem(shopItem);
        return new ResponseEntity<>(shopItem_, HttpStatus.CREATED);
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        String deleted_ = shopItemService.deleteShopItem(id);
        return new ResponseEntity<>(deleted_, HttpStatus.OK);
    }

}
