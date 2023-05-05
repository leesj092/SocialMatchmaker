package com.tinder2.tinderapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import java.util.Date;

@Entity
@Table(name = "users")
public class User {
	@Id
	@Column(name = "WISC_ID")
	private Integer wiscId;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "LAST_NAME")
	private String lastName;

	public enum Year {
		Freshman,
		Sophomore,
		Junior,
		Senior
	}

	@Enumerated(EnumType.STRING)
	@Column(name = "YEAR")
	private Year year;

	@Column(name = "MAJOR")
	private String major;

	@Column(name = "BIOGRAPHY")
	private String biography;

	@Column(name = "profile_picture")
	private String profilePicture;

	@Column(name = "birthday")
	private Date birthday;
	
	public User() {
		
	}

	// getters and setters for wiscId field
	public Integer getWiscId() {
		return wiscId;
	}

	public void setWiscId(Integer wiscId) {
		this.wiscId = wiscId;
	}

	// getters and setters for firstName field
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	// getters and setters for lastName field
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	// getters and setters for year field
	public Year getYear() {
		return year;
	}

	public void setYear(Year year) {
		this.year = year;
	}

	// getters and setters for major field
	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	// getters and setters for biography field
	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	// getters and setters for profilePicture field
	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

	// getters and setters for birthday field
	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
}