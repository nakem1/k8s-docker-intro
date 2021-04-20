 
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'admin' );

/** MySQL hostname */
define( 'DB_HOST', 'service-mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_Pv~|Ao^1c9Z4.p3ZWg:^?u1sh35KGin,Gp=al51%N(q@-uQ5yvLWxW}66MPy;$T');
define('SECURE_AUTH_KEY',  'J-Y4vm+@syu2IZk|@kx>_ZBI):kKOPy]^uh9>?vr]Cfr>{f70~oUv`;Mcdb(PFX#');
define('LOGGED_IN_KEY',    '1h[bz`^)lG&CHV:w.3*.V@bqj 8#X,[K)KdNLg8?eNI9as^0LvSgI:W}jo;d1=aj');
define('NONCE_KEY',        'BpHp1TAo,=$4,eP05Cp--1At[@cN=]hzt>FipE%;66O]pNRi*v@}!kK=Glq;:p~P');
define('AUTH_SALT',        '4dYTu--*=Oxd0au.TnDveCpSJo|#(-tt)K?ri[;2-<)*d/3a;}it`WSQe@nW8~ot');
define('SECURE_AUTH_SALT', 'b gVT73:I]y +N[sZ6[CzhKrRqv7R6YM7!#m||}gv`cXX9)sA-ev<h{^wi4dWWLG');
define('LOGGED_IN_SALT',   'Um%Q[laNQA&S`2OilQ+U<{%oO<WoYu+Sg+n9,b@6z1rP2F]T7vCKamt2ht~LH,t}');
define('NONCE_SALT',       '{J9Sh{]|[tc@h)]H:1+^AM}@?@+D[?U3K*4:[+.gS8>Xo+.$_lkp)8*7-wgGMk%^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
