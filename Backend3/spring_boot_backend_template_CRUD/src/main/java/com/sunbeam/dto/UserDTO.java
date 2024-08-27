package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.sunbeam.entities.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long userId;
	@NotBlank
	private String name;
	@Email
	private String email;
	@Column(name = "phone_no" , length = 10)
	private String phoneNo;
	private String address;
	@JsonProperty(access = Access.WRITE_ONLY) //required only in de-ser.
	private String password;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	//@JsonFormat(pattern ="HH:mm:ss",shape =JsonFormat.Shape.STRING)
//	@DateTimeFormat(pattern ="HH:mm:ss")
//	private LocalTime outTime;
	private Role role;
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	public String getPassword() {
		return password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	
	
	
}
