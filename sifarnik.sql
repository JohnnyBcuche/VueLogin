-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2017 at 02:06 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `slimapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `sifarnik`
--

CREATE TABLE IF NOT EXISTS `sifarnik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Pasmina` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `sifarnik`
--

INSERT INTO `sifarnik` (`id`, `Pasmina`, `Description`) VALUES
(1, 'Prva', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maxime, alias repellat neque! Sed dolore deleniti possimus autem, eius modi quibusdam pariatur. Eos atque dolorum sed illum, animi magnam repudiandae?'),
(5, 'ttttttt', 'wrwgergrg'),
(6, 'hsrhrthsrthsrth', 'fgxhdrth'),
(7, 'eydryhh', 'dtyhthhy'),
(9, 'yyyyyyyyyyyyyy', 'yyyyyyyyyyyy'),
(11, 'geer', 'erger');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
