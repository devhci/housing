-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 25, 2013 at 10:05 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ncrhousing`
--

-- --------------------------------------------------------

--
-- Table structure for table `housingdata`
--

CREATE TABLE IF NOT EXISTS `housingdata` (
  `House_id` int(11) NOT NULL AUTO_INCREMENT,
  `House_rent` int(20) NOT NULL,
  `House_type` varchar(100) NOT NULL,
  `Furnished_type` varchar(45) NOT NULL,
  `Marker_title` varchar(200) NOT NULL,
  `photo_url` varchar(500) NOT NULL,
  `Street_Info` varchar(1000) NOT NULL,
  `longitude` decimal(10,6) NOT NULL,
  `latitude` decimal(10,6) NOT NULL,
  `Lease_type` varchar(200) NOT NULL,
  `Area` int(10) NOT NULL,
  `Security_deposit` int(10) NOT NULL,
  `Bedrooms` int(5) NOT NULL,
  `Bathrooms` int(5) NOT NULL,
  `Tv` int(5) NOT NULL,
  `Ac` int(5) NOT NULL,
  `Bed` int(5) NOT NULL,
  `Cupboards` int(5) NOT NULL,
  `DiningTable` tinyint(1) NOT NULL DEFAULT '0',
  `Parking` tinyint(1) NOT NULL DEFAULT '0',
  `Fridge` tinyint(1) NOT NULL DEFAULT '0',
  `Sofa` tinyint(1) NOT NULL DEFAULT '0',
  `GasPipeline` tinyint(1) NOT NULL DEFAULT '0',
  `Stove` tinyint(1) NOT NULL DEFAULT '0',
  `Gym` tinyint(1) NOT NULL DEFAULT '0',
  `Lift` tinyint(1) NOT NULL DEFAULT '1',
  `WashingMachine` tinyint(1) NOT NULL DEFAULT '1',
  `Microwave` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`House_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1024 ;

--
-- Dumping data for table `housingdata`
--

INSERT INTO `housingdata` (`House_id`, `House_rent`, `House_type`, `Furnished_type`, `Marker_title`, `photo_url`, `Street_Info`, `longitude`, `latitude`, `Lease_type`, `Area`, `Security_deposit`, `Bedrooms`, `Bathrooms`, `Tv`, `Ac`, `Bed`, `Cupboards`, `DiningTable`, `Parking`, `Fridge`, `Sofa`, `GasPipeline`, `Stove`, `Gym`, `Lift`, `WashingMachine`, `Microwave`) VALUES
(1000, 10000, 'PG_Boys', 'fullyF', 'furnished Rs 10000', 'images/2BHK.png', 'DLF Phase III', '77.099090', '28.493663', 'Boys only', 200, 20000, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0),
(1001, 10000, 'PG_Boys', 'fullyF', 'furnished Rs 10000', 'images/2BHK.png', 'DLF Phase III', '77.099290', '28.493633', 'Boys only', 200, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(1002, 10000, 'PG_Boys', 'fullyF', 'furnished Rs 10000', 'images/PG.png', 'DLF Phase III', '77.096290', '28.493333', 'Boys only', 200, 15000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
(1005, 15000, 'PG_Boys', 'Semi', 'Unfurnished Rs 8000', 'images/PG.png', 'DLF Phase III', '77.099120', '28.493563', 'Boys only', 20000, 15000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0),
(1006, 15000, 'PG_Boys', 'Semi', 'Unfurnished Rs 8000', 'images/PG.png', 'DLF Phase III', '77.082481', '28.464541', 'Boys only', 20000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(1007, 15000, 'PG_Boys', 'Semi', 'Unfurnished Rs 8000', 'images/PG.png', 'DLF Phase III', '77.082567', '28.459863', 'Boys only', 20000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(1008, 15000, 'PG_Boys', 'Semi', 'Unfurnished Rs 8000', 'images/PG.png', 'DLF Phase III', '77.082967', '28.459563', 'Boys only', 23232, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(1010, 10000, '1BHK', 'fullyF', 'furnished Rs 15000', 'images/1BHK.png', 'DLF Phase III', '77.098090', '28.494663', 'family only', 232323, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(1011, 10000, '1BHK', 'fullyF', 'furnished Rs 15000', 'images/1BHK.png', 'DLF Phase III', '77.099590', '28.493633', 'Boys only', 2000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0),
(1012, 10000, '1BHK', 'fullyF', 'furnished Rs 17000', 'images/1BHK.png', 'DLF Phase III', '77.095290', '28.495333', 'Family only', 20000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0),
(1013, 15000, '1BHK', 'Semi', 'Unfurnished Rs 1800', 'images/1BHK.png', 'DLF Phase III', '77.099620', '28.493763', 'Family only', 34000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0),
(1014, 15000, '1BHK', 'Semi', 'Unfurnished Rs 20000', 'images/1BHK.png', 'DLF Phase III', '77.089481', '28.468541', 'Family only', 34000, 40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(1015, 15000, '1BHK', 'Semi', 'Unfurnished Rs 8000', 'images/1BHK.png', 'DLF Phase III', '77.082967', '28.459893', 'Family only', 34000, 35000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0),
(1016, 15000, '1BHK', 'Semi', 'Unfurnished Rs 8000', 'images/1BHK.png', 'DLF Phase III', '77.082367', '28.459163', 'Family only', 34000, 343443, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(1017, 17000, '1RK', 'fullyF', 'furnished Rs 15000', 'images/1RK.png', 'DLF Phase III', '77.098390', '28.496663', 'Family only', 34000, 55555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(1018, 14000, '1RK', 'fullyF', 'furnished Rs 15000', 'images/1RK.png', 'DLF Phase III', '77.096590', '28.496933', 'Family only', 28000, 343434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1),
(1019, 14000, '1RK', 'fullyF', 'furnished Rs 17000', 'images/1RK.png', 'DLF Phase III', '77.097290', '28.496133', 'Family only', 30000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(1020, 15000, '1RK', 'Semi', 'Unfurnished Rs 1800', 'images/1RK.png', 'DLF Phase III', '77.098620', '28.496763', 'Family only', 30000, 35000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1),
(1021, 15000, '1RK', 'Semi', 'Unfurnished Rs 20000', 'images/1RK.png', 'DLF Phase III', '77.099481', '28.478541', 'Family only', 30000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(1022, 15000, '1RK', 'Semi', 'Unfurnished Rs 8000', 'images/1RK.png', 'DLF Phase III', '77.092967', '28.469893', 'Family only', 30000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1),
(1023, 15000, '1RK', 'Semi', 'Unfurnished Rs 8000', 'images/1RK.png', 'DLF Phase III', '77.092367', '28.469163', 'Family only', 30000, 30000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
