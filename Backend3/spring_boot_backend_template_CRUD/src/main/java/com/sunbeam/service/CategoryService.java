package com.sunbeam.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CategoryResDto;
import com.sunbeam.entities.Category;

public interface CategoryService {
    
	//ApiResponse addCategory(Category category);
	
	List<Category> getAllCategories();
	
	List<CategoryResDto> getCategoryByCategoryName( String categoryName);
	
//	Category getCategoryName( String categoryName);

	String updateCategoryDetails(Long categoryId,Category category);

	String deleteCategoryDetails(Long categoryId);
	
	CategoryResDto addNewCategoryWithImage(CategoryResDto dto, MultipartFile image) throws IOException;
    
}
