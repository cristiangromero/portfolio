-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2022 a las 02:56:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `portfoliodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `idCity` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `idState` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `civil`
--

CREATE TABLE `civil` (
  `idCivil` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `idCountry` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `idCourses` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `granted` varchar(200) DEFAULT NULL,
  `datefinish` date NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `education`
--

CREATE TABLE `education` (
  `idEducation` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `dateini` date NOT NULL,
  `datefinish` date DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `school` varchar(200) NOT NULL,
  `level` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experience`
--

CREATE TABLE `experience` (
  `idExperience` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `expertise` varchar(50) NOT NULL,
  `dateini` date NOT NULL,
  `datefinish` date DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `company` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `languages`
--

CREATE TABLE `languages` (
  `idLanguage` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lastgraduation`
--

CREATE TABLE `lastgraduation` (
  `idLastGraduation` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `idProject` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `rol` varchar(50) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

CREATE TABLE `skills` (
  `idSkill` int(11) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socialmedia`
--

CREATE TABLE `socialmedia` (
  `idsocialMedia` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `url` varchar(200) NOT NULL,
  `icon` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `states`
--

CREATE TABLE `states` (
  `idState` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `idCountry` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `street` varchar(200) DEFAULT NULL,
  `number` int(6) DEFAULT NULL,
  `birth` date NOT NULL,
  `children` int(3) DEFAULT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `iam` varchar(255) DEFAULT NULL,
  `aboutme` varchar(255) DEFAULT NULL,
  `mydescript` varchar(255) DEFAULT NULL,
  `mydescript2` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `idCivil` int(11) NOT NULL,
  `idLastGraduation` int(11) NOT NULL,
  `idCity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_languages`
--

CREATE TABLE `user_languages` (
  `idUser` int(11) NOT NULL,
  `idLanguage` int(11) NOT NULL,
  `percent` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_skills`
--

CREATE TABLE `user_skills` (
  `idUser` int(11) NOT NULL,
  `idSkill` int(11) NOT NULL,
  `percent` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_socialmedia`
--

CREATE TABLE `user_socialmedia` (
  `idUser` int(11) NOT NULL,
  `idSocialMedia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`idCity`),
  ADD KEY `idState` (`idState`);

--
-- Indices de la tabla `civil`
--
ALTER TABLE `civil`
  ADD PRIMARY KEY (`idCivil`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`idCountry`);

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`idCourses`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`idEducation`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`idExperience`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`idLanguage`);

--
-- Indices de la tabla `lastgraduation`
--
ALTER TABLE `lastgraduation`
  ADD PRIMARY KEY (`idLastGraduation`);

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`idProject`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`idSkill`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indices de la tabla `socialmedia`
--
ALTER TABLE `socialmedia`
  ADD PRIMARY KEY (`idsocialMedia`);

--
-- Indices de la tabla `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`idState`),
  ADD KEY `idCountry` (`idCountry`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `idCivil` (`idCivil`),
  ADD KEY `idLastGraduated` (`idLastGraduation`),
  ADD KEY `idCities` (`idCity`);

--
-- Indices de la tabla `user_languages`
--
ALTER TABLE `user_languages`
  ADD PRIMARY KEY (`idUser`,`idLanguage`),
  ADD KEY `idLanguage` (`idLanguage`);

--
-- Indices de la tabla `user_skills`
--
ALTER TABLE `user_skills`
  ADD PRIMARY KEY (`idUser`,`idSkill`),
  ADD KEY `idSkill` (`idSkill`);

--
-- Indices de la tabla `user_socialmedia`
--
ALTER TABLE `user_socialmedia`
  ADD PRIMARY KEY (`idUser`,`idSocialMedia`),
  ADD KEY `idSocialMedia` (`idSocialMedia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `civil`
--
ALTER TABLE `civil`
  MODIFY `idCivil` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `idCourses` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `education`
--
ALTER TABLE `education`
  MODIFY `idEducation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `experience`
--
ALTER TABLE `experience`
  MODIFY `idExperience` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `languages`
--
ALTER TABLE `languages`
  MODIFY `idLanguage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `idProject` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `skills`
--
ALTER TABLE `skills`
  MODIFY `idSkill` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`idState`) REFERENCES `states` (`idState`);

--
-- Filtros para la tabla `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `states`
--
ALTER TABLE `states`
  ADD CONSTRAINT `states_ibfk_1` FOREIGN KEY (`idCountry`) REFERENCES `countries` (`idCountry`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idCivil`) REFERENCES `cities` (`idCity`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`idLastGraduation`) REFERENCES `lastgraduation` (`idLastGraduation`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`idCivil`) REFERENCES `civil` (`idCivil`);

--
-- Filtros para la tabla `user_languages`
--
ALTER TABLE `user_languages`
  ADD CONSTRAINT `user_languages_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `user_languages_ibfk_2` FOREIGN KEY (`idLanguage`) REFERENCES `languages` (`idLanguage`);

--
-- Filtros para la tabla `user_skills`
--
ALTER TABLE `user_skills`
  ADD CONSTRAINT `user_skills_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `user_skills_ibfk_2` FOREIGN KEY (`idSkill`) REFERENCES `skills` (`idSkill`);

--
-- Filtros para la tabla `user_socialmedia`
--
ALTER TABLE `user_socialmedia`
  ADD CONSTRAINT `user_socialmedia_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `user_socialmedia_ibfk_2` FOREIGN KEY (`idSocialMedia`) REFERENCES `socialmedia` (`idsocialMedia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
