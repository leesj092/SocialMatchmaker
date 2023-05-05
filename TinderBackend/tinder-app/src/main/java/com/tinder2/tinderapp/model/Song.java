package com.tinder2.tinderapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

import java.util.Date;

@Entity
@Table(name = "songs")
public class Song {
	@Id
    @Column(name = "TITLE")
	private String title;

	@Column(name = "ARTIST")
	private String artist;

	@Column(name = "RELEASE_DATE")
	private Date releaseDate;

	@Column(name = "GENRES")
	private String genres;

	@Column(name = "IMAGE")
	private byte[] image;

	@Column(name = "WISC_ID")
	private int wiscId;
	
	public Song() {
		
	}

    // getters and setters for title field
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

    // getters and setters for artist field
	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

    // getters and setters for releaseDate field
	public Date getRelDate() {
		return releaseDate;
	}

    public void setRelDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

    // getters and setters for image field
	public byte[] getimage() {
		return image;
	}

    public void setimage(byte[] image) {
		this.image = image;
	}

    // getters and setters for genres field
	public String getGenres() {
		return genres;
	}

	public void setGenres(String genres) {
		this.genres = genres;
	}

	// getters and setters for wiscId field
	public Integer getWiscId() {
		return wiscId;
	}

	public void setWiscId(Integer wiscId) {
		this.wiscId = wiscId;
	}
    
}
