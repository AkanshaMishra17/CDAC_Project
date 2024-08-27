package com.sunbeam.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ItemAddDto;
import com.sunbeam.dto.ItemResDTO;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.Item;

public interface ItemService {
      ApiResponse addItem(ItemAddDto dto, Long categoryId);
      
      List<ItemResDTO> getItemByCategoryName(String categoryName);
      
//      String updateItemDetails(Long itemId,ItemResDTO item);
      
      ItemResDTO updateItem(Long itemId, ItemResDTO dto);
      
      String deleteItemDetails(Long itemId);
      
      //Item uploadImageForItem(Long itemId, Long categoryId, MultipartFile image) throws IOException;
      
      String saveItemImage(MultipartFile image) throws IOException;
      
      //ItemResDTO patchItemDetails(Long itemId, Map<String, Object> map);

}
