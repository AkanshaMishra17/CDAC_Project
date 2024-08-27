package com.sunbeam.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.apache.commons.io.FileUtils.readFileToByteArray;
import static org.apache.commons.io.FileUtils.writeByteArrayToFile;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.custom_exception.ResourceNotFoundException;
import com.sunbeam.dao.CategoryDao;
import com.sunbeam.dao.ItemDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.Item;

import io.swagger.v3.oas.models.Paths;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {

    @Value("${file.upload.location}")
    private String uploadFolder;

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private ItemDao itemDao;

    @PostConstruct
    public void init() throws IOException {
        File folder = new File(uploadFolder);
        if (!folder.exists()) {
            folder.mkdir();
            System.out.println("Created a new folder for uploads at: " + uploadFolder);
        } else {
            System.out.println("Upload folder exists at: " + uploadFolder);
        }
    }
    
    @Override
	public void uploadImage(Category category, MultipartFile image) throws IOException {
		String path = uploadFolder.concat(image.getOriginalFilename());
		System.out.println(path);
		// Use FileUtils method : writeByte[] --> File
		writeByteArrayToFile(new File(path), image.getBytes());
		// set image path
		category.setImagePath(path);
		// OR to store the img directly in DB as a BLOB
		// emp.setImage(image.getBytes());
		System.out.println("Image file uploaded successfully for category " + category.getCategoryName());
	}

//    @Override
//    public ApiResponse uploadImage(Long categoryId, MultipartFile image) throws IOException {
//        Category category = categoryDao.findById(categoryId)
//                .orElseThrow(() -> new ResourceNotFoundException("Invalid category ID: " + categoryId));
//
//        String fileName = categoryId + "_" + image.getOriginalFilename();
//        Path path = Path.of(uploadFolder, fileName);
//        Files.write(path, image.getBytes());
//
//        category.setImagePath(path.toString());
//        categoryDao.save(category);
//
//        return path.toString(); // Return the path for confirmation
//    }

    @Override
    public byte[] serveImage(Long categoryId) throws IOException {
        Category category = categoryDao.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid category ID: " + categoryId));

        String imagePath = category.getImagePath();
        if (imagePath != null) {
            return Files.readAllBytes(Path.of(imagePath));
        } else {
            throw new ApiException("Image not found for category ID: " + categoryId);
        }
    }

    @Override
    public ApiResponse uploadItemImage(Long categoryId, MultipartFile image) throws IOException {
        Item item = itemDao.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid item ID: " + categoryId));

        String fileName = categoryId + "_" + image.getOriginalFilename();
        Path path = Path.of(uploadFolder, fileName);
        Files.write(path, image.getBytes());

        item.setItemImagePath(path.toString());
        itemDao.save(item);

        return new ApiResponse("Image file uploaded successfully for category id " + categoryId); // Return the path for confirmation
    }
    
    
    @Override
	public ApiResponse uploadImage(Long categoryId, MultipartFile image) throws IOException {
		Category category = categoryDao.
				findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Invalid category ID!!!!"));
		// cat found --> PERSISTENT
		// store the image on server side folder
		String path = uploadFolder.concat(image.getOriginalFilename());
		System.out.println(path);
		// Use FileUtils method : writeByte[] --> File
		writeByteArrayToFile(new File(path), image.getBytes());
		// set image path in DB (emps table)
		category.setImagePath(path);
		// OR to store the img directly in DB as a BLOB
		// emp.setImage(image.getBytes());
		return new ApiResponse("Image file uploaded successfully for cat id " + categoryId);
	}
    
//    public Item uploadImageForItem(Long itemId, Long categoryId, MultipartFile image) throws IOException {
//        Item item = itemDao.findById(itemId)
//                .orElseThrow(() -> new RuntimeException("Item not found"));
//        
//        Category category = categoryDao.findById(categoryId)
//                .orElseThrow(() -> new RuntimeException("Category not found"));
//
//        // Ensure item belongs to the specified category
//        if (!item.getCategory().equals(category)) {
//            throw new RuntimeException("Item does not belong to the specified category");
//        }
//
//        String imagePath = saveItemImage(image);
//        item.setItemImagePath(imagePath);
//
//        return itemDao.save(item);
//    }
    

//    @Override
//    public byte[] serveItemImage(Long itemId) throws IOException {
//        Item item = itemDao.findById(itemId)
//                .orElseThrow(() -> new ResourceNotFoundException("Invalid item ID: " + itemId));
//
//        String imagePath = item.getItemImagePath();
//        if (imagePath != null) {
//            return Files.readAllBytes(Path.of(imagePath));
//        } else {
//            throw new ApiException("Image not found for item ID: " + itemId);
//        }
//    }

	
	}

