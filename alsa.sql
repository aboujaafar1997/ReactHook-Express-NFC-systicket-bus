-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 19 juin 2020 à 01:32
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `alsa`
--

-- --------------------------------------------------------

--
-- Structure de la table `carte`
--

DROP TABLE IF EXISTS `carte`;
CREATE TABLE IF NOT EXISTS `carte` (
  `id` int(255) NOT NULL,
  `solde` int(255) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `carte`
--

INSERT INTO `carte` (`id`, `solde`, `date`) VALUES
(889986741, 1408, '21-02-2020 16:30:33');

-- --------------------------------------------------------

--
-- Structure de la table `chauffeur`
--

DROP TABLE IF EXISTS `chauffeur`;
CREATE TABLE IF NOT EXISTS `chauffeur` (
  `cin` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `chauffeur`
--

INSERT INTO `chauffeur` (`cin`, `nom`, `prenom`, `password`) VALUES
('j512', 'aboujaafar', 'othmane', '123456789');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `cin` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `id_card` int(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`cin`, `nom`, `prenom`, `id_card`, `image`) VALUES
('1250025', 'aboujaafar', 'othmane', 889986741, 'man.png');

-- --------------------------------------------------------

--
-- Structure de la table `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `cin` varchar(30) NOT NULL,
  `carte_id` int(255) NOT NULL,
  `totale` int(255) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `log`
--

INSERT INTO `log` (`cin`, `carte_id`, `totale`, `date`) VALUES
('j512', 889986741, -4, '2020-06-18T18:51:01.872Z'),
('j512', 889986741, -4, '2020-06-18T18:51:07.891Z'),
('j512', 889986741, -4, '2020-06-18T18:51:08.859Z'),
('j512', 889986741, 20, '2020-06-18T18:51:13.799Z'),
('j512', 889986741, -4, '2020-06-18T19:03:50.416Z'),
('j512', 889986741, 20, '2020-06-18T19:04:02.465Z'),
('j512', 889986741, -4, '2020-06-18T19:08:55.588Z'),
('j512', 889986741, -4, '2020-06-18T23:21:09.942Z'),
('j512', 889986741, -4, '2020-06-18T23:21:37.671Z'),
('j512', 889986741, -4, '2020-06-18T23:22:06.206Z'),
('j512', 889986741, 20, '2020-06-18T23:22:43.546Z'),
('j512', 889986741, 20, '2020-06-18T23:22:49.914Z'),
('j512', 889986741, -4, '2020-06-18T23:26:59.278Z'),
('j512', 889986741, -4, '2020-06-18T23:36:47.553Z'),
('j512', 889986741, -4, '2020-06-18T23:46:40.078Z'),
('j512', 889986741, -4, '2020-06-19T01:28:31.092Z'),
('j512', 889986741, -4, '2020-06-19T01:28:37.944Z');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
