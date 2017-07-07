package com.revature.rideshare.data.jpa.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="RIDE_REQUEST")
public class RideRequest implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7337880503973485600L;

	@Id
	@Column(name="RIDE_REQUEST_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "RR_ID_SEQUENCE")
	@SequenceGenerator(name="RR_ID_SEQUENCE", sequenceName="RR_ID_SEQUENCE")
	private long requestId;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.REMOVE)
	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE )
	private PointOfInterest pickupLocation;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE )
	private PointOfInterest dropOffLocation;
	
	@Temporal(TemporalType.DATE)
	@Column(name="TIME")
	private Date time;
	
	@Column(name="NOTES")
	private String notes;
	
	public RideRequest(){}

	public RideRequest(long requestId, User user, PointOfInterest pickupLocation, PointOfInterest dropOffLocation,
			Date time, String notes) {
		super();
		this.requestId = requestId;
		this.user = user;
		this.pickupLocation = pickupLocation;
		this.dropOffLocation = dropOffLocation;
		this.time = time;
		this.notes = notes;
	}

	public long getRequestId() {
		return requestId;
	}

	public void setRequestId(long requestId) {
		this.requestId = requestId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public PointOfInterest getPickupLocation() {
		return pickupLocation;
	}

	public void setPickupLocation(PointOfInterest pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	public PointOfInterest getDropOffLocation() {
		return dropOffLocation;
	}

	public void setDropOffLocation(PointOfInterest dropOffLocation) {
		this.dropOffLocation = dropOffLocation;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	
	
	
}
