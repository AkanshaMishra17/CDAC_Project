package com.sunbeam.dto;

public class CategoryResponseDto {
	
	    private String categoryName;
	    private String description;
	    private byte[] image; // Add this field

	    // Getters and Setters
	    public String getCategoryName() {
	        return categoryName;
	    }

	    public void setCategoryName(String categoryName) {
	        this.categoryName = categoryName;
	    }

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
	    }

	    public byte[] getImage() {
	        return image;
	    }

	    public void setImage(byte[] image) {
	        this.image = image;
	    }
	}

