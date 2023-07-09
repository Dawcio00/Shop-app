package com.example.demo.services;

import com.example.demo.model.ShopItem;
import com.example.demo.repository.ShopItemRepository;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

import java.util.List;


@Service
@Transactional
public class ShopItemService {

    private final ShopItemRepository shopItemRepository;

    public ShopItemService(ShopItemRepository shopItemsRepository) {
        this.shopItemRepository = shopItemsRepository;
    }

    public ShopItem addShopItem(ShopItem shopItem) {
        return shopItemRepository.save(shopItem);
    }

    public List<ShopItem> getShopItems() {
        return shopItemRepository.findAll();
    }

    public String deleteShopItem(Long id) {
        shopItemRepository.deleteById(id);
        return "Deleted";
    }


}
