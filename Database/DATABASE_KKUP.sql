-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for kkup
CREATE DATABASE IF NOT EXISTS `kkup` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `kkup`;

-- Dumping structure for table kkup.activities
CREATE TABLE IF NOT EXISTS `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `image_url` varchar(255) DEFAULT '/img/default.jpg',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table kkup.activities: ~3 rows (approximately)
INSERT INTO `activities` (`id`, `name`, `description`, `date`, `image_url`) VALUES
	(1, 'โยคะเช้า', 'กิจกรรมโยคะเพื่อสุขภาพ', '2025-02-10', '/img/yoga.webp'),
	(2, 'วิ่งมาราธอน', 'กิจกรรมวิ่งเพื่อการกุศล', '2025-02-15', '/img/maraton.webp'),
	(28, 'Freedom', 'Building our own mecha', '2025-02-20', '/img/freedom.jpg');

-- Dumping structure for table kkup.contact_message
CREATE TABLE IF NOT EXISTS `contact_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_contact_user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table kkup.contact_message: ~1 rows (approximately)
INSERT INTO `contact_message` (`id`, `name`, `email`, `subject`, `message`, `created_at`) VALUES
	(8, 'Test7', 'kongsupakorn30@gmail.com', 'general', '1234', '2025-02-06 09:47:27');

-- Dumping structure for table kkup.health_blog
CREATE TABLE IF NOT EXISTS `health_blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `published_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `image_url` varchar(255) DEFAULT '/img/default-health.jpg',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table kkup.health_blog: ~3 rows (approximately)
INSERT INTO `health_blog` (`id`, `title`, `content`, `author`, `published_date`, `image_url`) VALUES
	(1, '5 Best Exercises for Seniors', 'Regular exercise helps maintain strength, balance, and mobility...', 'Dr. Pumiphol', '2025-02-06 08:52:01', '/img/water_blog.webp'),
	(2, 'The Importance of Hydration', 'Drinking enough water keeps your body functioning properly...', 'Dr. Anan', '2025-02-06 08:52:01', '/img/execies_blog.webp'),
	(3, 'How to get a good habbit', 'Start with doing something little by little every Day!', 'Dr. Mahoraga', '2025-02-06 14:44:47', '/img/couple.png');

-- Dumping structure for table kkup.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table kkup.users: ~1 rows (approximately)
INSERT INTO `users` (`id`, `email`, `password`) VALUES
	(11, 'gae@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055');

-- Dumping structure for table kkup.user_activities
CREATE TABLE IF NOT EXISTS `user_activities` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `joined_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('pending','completed') DEFAULT 'pending',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_join` (`email`,`activity_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `user_activities_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table kkup.user_activities: ~2 rows (approximately)
INSERT INTO `user_activities` (`id`, `email`, `activity_id`, `joined_at`, `status`) VALUES
	(1, 'kongsupakorn30@gmail.com', 1, '2025-02-06 13:24:05', 'pending'),
	(2, 'admin@gmail.com', 28, '2025-02-06 17:23:15', 'pending');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
