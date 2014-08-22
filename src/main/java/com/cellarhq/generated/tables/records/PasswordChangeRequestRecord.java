/**
 * This class is generated by jOOQ
 */
package com.cellarhq.generated.tables.records;

/**
 * This class is generated by jOOQ.
 */
@javax.annotation.Generated(value    = { "http://www.jooq.org", "3.4.1" },
                            comments = "This class is generated by jOOQ")
@java.lang.SuppressWarnings({ "all", "unchecked", "rawtypes" })
@javax.persistence.Entity
@javax.persistence.Table(name = "password_change_request", schema = "public")
public class PasswordChangeRequestRecord extends org.jooq.impl.UpdatableRecordImpl<com.cellarhq.generated.tables.records.PasswordChangeRequestRecord> implements org.jooq.Record3<java.lang.String, java.lang.Long, java.sql.Timestamp> {

	private static final long serialVersionUID = 1441542431;

	/**
	 * Setter for <code>public.password_change_request.id</code>.
	 */
	public void setId(java.lang.String value) {
		setValue(0, value);
	}

	/**
	 * Getter for <code>public.password_change_request.id</code>.
	 */
	@javax.persistence.Id
	@javax.persistence.Column(name = "id", unique = true, nullable = false, length = 32)
	public java.lang.String getId() {
		return (java.lang.String) getValue(0);
	}

	/**
	 * Setter for <code>public.password_change_request.account_email_id</code>.
	 */
	public void setAccountEmailId(java.lang.Long value) {
		setValue(1, value);
	}

	/**
	 * Getter for <code>public.password_change_request.account_email_id</code>.
	 */
	@javax.persistence.Column(name = "account_email_id", nullable = false, precision = 64)
	public java.lang.Long getAccountEmailId() {
		return (java.lang.Long) getValue(1);
	}

	/**
	 * Setter for <code>public.password_change_request.created_date</code>.
	 */
	public void setCreatedDate(java.sql.Timestamp value) {
		setValue(2, value);
	}

	/**
	 * Getter for <code>public.password_change_request.created_date</code>.
	 */
	@javax.persistence.Column(name = "created_date", nullable = false)
	public java.sql.Timestamp getCreatedDate() {
		return (java.sql.Timestamp) getValue(2);
	}

	// -------------------------------------------------------------------------
	// Primary key information
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Record1<java.lang.String> key() {
		return (org.jooq.Record1) super.key();
	}

	// -------------------------------------------------------------------------
	// Record3 type implementation
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row3<java.lang.String, java.lang.Long, java.sql.Timestamp> fieldsRow() {
		return (org.jooq.Row3) super.fieldsRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row3<java.lang.String, java.lang.Long, java.sql.Timestamp> valuesRow() {
		return (org.jooq.Row3) super.valuesRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field1() {
		return com.cellarhq.generated.tables.PasswordChangeRequest.PASSWORD_CHANGE_REQUEST.ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Long> field2() {
		return com.cellarhq.generated.tables.PasswordChangeRequest.PASSWORD_CHANGE_REQUEST.ACCOUNT_EMAIL_ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.sql.Timestamp> field3() {
		return com.cellarhq.generated.tables.PasswordChangeRequest.PASSWORD_CHANGE_REQUEST.CREATED_DATE;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value1() {
		return getId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Long value2() {
		return getAccountEmailId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.sql.Timestamp value3() {
		return getCreatedDate();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public PasswordChangeRequestRecord value1(java.lang.String value) {
		setId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public PasswordChangeRequestRecord value2(java.lang.Long value) {
		setAccountEmailId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public PasswordChangeRequestRecord value3(java.sql.Timestamp value) {
		setCreatedDate(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public PasswordChangeRequestRecord values(java.lang.String value1, java.lang.Long value2, java.sql.Timestamp value3) {
		return this;
	}

	// -------------------------------------------------------------------------
	// Constructors
	// -------------------------------------------------------------------------

	/**
	 * Create a detached PasswordChangeRequestRecord
	 */
	public PasswordChangeRequestRecord() {
		super(com.cellarhq.generated.tables.PasswordChangeRequest.PASSWORD_CHANGE_REQUEST);
	}

	/**
	 * Create a detached, initialised PasswordChangeRequestRecord
	 */
	public PasswordChangeRequestRecord(java.lang.String id, java.lang.Long accountEmailId, java.sql.Timestamp createdDate) {
		super(com.cellarhq.generated.tables.PasswordChangeRequest.PASSWORD_CHANGE_REQUEST);

		setValue(0, id);
		setValue(1, accountEmailId);
		setValue(2, createdDate);
	}
}