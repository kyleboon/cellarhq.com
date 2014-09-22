/**
 * This class is generated by jOOQ
 */
package com.cellarhq.generated.tables;

/**
 * This class is generated by jOOQ.
 */
@javax.annotation.Generated(value    = { "http://www.jooq.org", "3.4.1" },
                            comments = "This class is generated by jOOQ")
@java.lang.SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Activity extends org.jooq.impl.TableImpl<com.cellarhq.generated.tables.records.ActivityRecord> {

	private static final long serialVersionUID = 1603735069;

	/**
	 * The singleton instance of <code>public.activity</code>
	 */
	public static final com.cellarhq.generated.tables.Activity ACTIVITY = new com.cellarhq.generated.tables.Activity();

	/**
	 * The class holding records for this type
	 */
	@Override
	public java.lang.Class<com.cellarhq.generated.tables.records.ActivityRecord> getRecordType() {
		return com.cellarhq.generated.tables.records.ActivityRecord.class;
	}

	/**
	 * The column <code>public.activity.id</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.activity.version</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Integer> VERSION = createField("version", org.jooq.impl.SQLDataType.INTEGER.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.activity.cellar_id</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Long> CELLAR_ID = createField("cellar_id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

	/**
	 * The column <code>public.activity.subject</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.String> SUBJECT = createField("subject", org.jooq.impl.SQLDataType.VARCHAR.length(255).nullable(false), this, "");

	/**
	 * The column <code>public.activity.action</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.String> ACTION = createField("action", org.jooq.impl.SQLDataType.VARCHAR.length(255).nullable(false), this, "");

	/**
	 * The column <code>public.activity.private</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Boolean> PRIVATE = createField("private", org.jooq.impl.SQLDataType.BOOLEAN.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.activity.data</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Object> DATA = createField("data", org.jooq.impl.SQLDataType.OTHER, this, "");

	/**
	 * The column <code>public.activity.created_date</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.sql.Timestamp> CREATED_DATE = createField("created_date", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * Create a <code>public.activity</code> table reference
	 */
	public Activity() {
		this("activity", null);
	}

	/**
	 * Create an aliased <code>public.activity</code> table reference
	 */
	public Activity(java.lang.String alias) {
		this(alias, com.cellarhq.generated.tables.Activity.ACTIVITY);
	}

	private Activity(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.ActivityRecord> aliased) {
		this(alias, aliased, null);
	}

	private Activity(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.ActivityRecord> aliased, org.jooq.Field<?>[] parameters) {
		super(alias, com.cellarhq.generated.Public.PUBLIC, aliased, parameters, "");
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Identity<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Long> getIdentity() {
		return com.cellarhq.generated.Keys.IDENTITY_ACTIVITY;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.UniqueKey<com.cellarhq.generated.tables.records.ActivityRecord> getPrimaryKey() {
		return com.cellarhq.generated.Keys.PK_ACTIVITY;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.util.List<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.ActivityRecord>> getKeys() {
		return java.util.Arrays.<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.ActivityRecord>>asList(com.cellarhq.generated.Keys.PK_ACTIVITY);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.util.List<org.jooq.ForeignKey<com.cellarhq.generated.tables.records.ActivityRecord, ?>> getReferences() {
		return java.util.Arrays.<org.jooq.ForeignKey<com.cellarhq.generated.tables.records.ActivityRecord, ?>>asList(com.cellarhq.generated.Keys.ACTIVITY__FK_ACTIVITY_CELLAR_ID);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.TableField<com.cellarhq.generated.tables.records.ActivityRecord, java.lang.Integer> getRecordVersion() {
		return com.cellarhq.generated.tables.Activity.ACTIVITY.VERSION;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public com.cellarhq.generated.tables.Activity as(java.lang.String alias) {
		return new com.cellarhq.generated.tables.Activity(alias, this);
	}

	/**
	 * Rename this table
	 */
	public com.cellarhq.generated.tables.Activity rename(java.lang.String name) {
		return new com.cellarhq.generated.tables.Activity(name, null);
	}
}