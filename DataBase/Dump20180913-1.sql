-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gymdatabase
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actividad`
--

DROP TABLE IF EXISTS `actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `actividad` (
  `id_actividad` int(11) NOT NULL AUTO_INCREMENT,
  `intensidad` varchar(45) DEFAULT NULL,
  `tiempo` time DEFAULT NULL,
  `ejercicio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_actividad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividad`
--

LOCK TABLES `actividad` WRITE;
/*!40000 ALTER TABLE `actividad` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  `palabra_seguridad` varchar(45) NOT NULL,
  `altura` int(11) NOT NULL,
  `peso` int(11) NOT NULL,
  `alergias` varchar(45) NOT NULL,
  `intolerancias` varchar(45) NOT NULL,
  `horario_laboral` time NOT NULL,
  `ocupacion` varchar(45) NOT NULL,
  `tiempo_ocio` time NOT NULL,
  `molestia` varchar(45) NOT NULL,
  `calidad_sueño` varchar(45) NOT NULL,
  `horas_descanso` time NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `data` (
  `id_menu` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_menu` varchar(45) NOT NULL,
  `carbohidratos` int(11) NOT NULL,
  `proteinas` int(11) NOT NULL,
  `grasas` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `menucol` varchar(45) NOT NULL,
  PRIMARY KEY (`id_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `menu` (
  `id_entrenamiento` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_menu` int(11) DEFAULT NULL,
  `id_actividad` int(11) DEFAULT NULL,
  `nombre_menu` varchar(45) DEFAULT NULL,
  `cliente` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `carbohidratos` int(11) DEFAULT NULL,
  `proteinas` int(11) DEFAULT NULL,
  `grasas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_entrenamiento`),
  KEY `id_usuario_idx` (`id_usuario`),
  KEY `id_cliente_idx` (`id_cliente`),
  KEY `id_menu_idx` (`id_menu`),
  KEY `id_actividad_idx` (`id_actividad`),
  CONSTRAINT `id_actividad` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id_actividad`),
  CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  CONSTRAINT `id_menu` FOREIGN KEY (`id_menu`) REFERENCES `data` (`id_menu`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(2,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(3,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(4,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(5,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(6,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(7,NULL,NULL,NULL,NULL,'loco','hola','1255-12-12','1255-12-12',15,15,15),(8,NULL,NULL,NULL,NULL,'Cena','Balbino','2018-01-01','2018-01-01',20,12,15),(9,NULL,NULL,NULL,NULL,'Comida','Juan','2018-01-01','2018-01-01',20,15,12),(10,NULL,NULL,NULL,NULL,'Comida','Beas','2018-01-01','2018-01-01',40,20,15),(11,154,NULL,NULL,NULL,'sfsfd','sdfs','2018-01-01','2018-01-01',15,15,10),(12,144,NULL,NULL,NULL,'Desayuno','Balbi','2018-01-01','2018-01-01',40,20,15),(13,144,NULL,NULL,NULL,'Cena','Nacho','2018-01-01','2018-01-04',30,12,15),(14,172,NULL,NULL,NULL,'Cena','Peter','2018-01-01','2018-02-01',40,15,12),(15,173,NULL,NULL,NULL,'Desayuno','Bea','2018-01-01','2018-01-01',40,20,15),(16,175,NULL,NULL,NULL,'Desayuno','Balbino','2018-01-01','2018-01-01',40,20,15),(17,175,NULL,NULL,NULL,'Hola','Hola','2018-01-01','2018-01-01',15,15,15),(18,177,NULL,NULL,NULL,'Desayuno','Daniel','2018-01-01','2018-02-02',40,20,15),(19,179,NULL,NULL,NULL,'Cena','Carlos','2018-01-01','2018-01-01',40,20,15),(20,179,NULL,NULL,NULL,'Cena','Daniel','2018-01-01','2018-01-01',40,12,15),(21,178,NULL,NULL,NULL,'Merienda','Daniel','2018-01-01','2018-02-01',40,12,15),(22,178,NULL,NULL,NULL,'Merienda','Pepe','2018-01-01','2018-02-02',40,20,15),(23,178,NULL,NULL,NULL,'asdas','asda','2018-01-01','2018-01-01',2,1,1),(24,178,NULL,NULL,NULL,'Merienda','Daniel','2018-01-01','2018-01-01',40,12,15),(25,178,NULL,NULL,NULL,'Desayuno','Victor','2018-01-01','2018-02-01',40,12,15),(26,190,NULL,NULL,NULL,'asda','adssd','2018-01-01','2018-01-01',15,15,45);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `contrasenia` varchar(80) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (10,'Nachete','Viano','alksdmlaksdm','Nviano@hotmail.com'),(17,'Jose','Vera','mugen','vera_mugen@hotmail.com'),(19,'David','Canarias platanito','Platanitorico','su_platanito@hotmail.com'),(39,'German','Polvara','polvarabest','polvara@hotmail.com'),(49,'nachete','vianete','vianete45','nacete_@tomate.com'),(69,'sdfsdf','sfs','fsdf','fsdf'),(70,'assdas','asdasd','asdasd','asdasdad'),(71,'sdgfse','sdfsdf','sdfs','sdfs'),(72,'sdfsdf','sdfs','0400','sdfs'),(73,'sdfsdf','sdfs','0400','sdfs'),(74,'sdfsdf','sdfs','0400','sdfs'),(75,'bAS','SADFS','DSAF','FASDF'),(76,'ASDAS','ASDD','DSD','SDAD'),(77,'sdfs','fsdf','fsdf','fsdf'),(78,'asd','asd','asd','asd'),(79,'asd','asd','das','das'),(80,'Balbino','Lopez','asd','lkad'),(81,'asd','asda','',''),(82,'sdf','sdf','',''),(83,'asd','asd','',''),(84,'asd','asd','',''),(85,'sadfasdf','sadfasdf','',''),(86,'sdafasdf','asdfasd','',''),(87,'asdads','asda','',''),(88,'asdfasdf','sadfasdf','',''),(89,'asdasd','asdas','',''),(90,'asda','sdasd','',''),(91,'sdfs','sdf','',''),(92,'sdf','sdf','',''),(93,'sdf','sdf','',''),(94,'asd','asd','',''),(95,'safasdfasfd','sadf','',''),(96,'asdasdasd','asdasd','',''),(97,'assd','asd','',''),(98,'asdasd','asdasd','',''),(99,'asda','asd','',''),(100,'asd','asd','',''),(101,'sdf','sdf','',''),(102,'asd','asd','',''),(103,'asdasd','asd','',''),(104,'Balbi','Lopez','',''),(105,'Nacho','asdad','',''),(106,'sadf','sdf','',''),(107,'sdfsdfsdf','sdf','',''),(108,'sdf','sdf','',''),(109,'asd','asd','',''),(110,'asd','asd','',''),(111,'sdf','sdf','',''),(112,'asd','asd','',''),(113,'asdasd','asd','asd','asd'),(114,'asd','asd','asd','asd'),(115,'asdasd','asd','asd','asd'),(116,'Balbino','asda','asdasd','dasd'),(117,'Balbino','asd','dasd','asd'),(118,'sdfsdf','sdfsdf','sdfsdf','sdfsd'),(119,'Balbino','Lopez','ASDADAS','ASDASD'),(124,'Balbi','asd','$2a$10$/w2Sj7Wqi9Iw8i6xUtcaL.IFdSPFWWVqpgbsYiaiPBcPwVGMbB8c.','asd'),(125,'Balbino','Lopez','$2a$10$ECS2mFbpNj.MhTdAzxe04OYpOoNbEdoqvLqO5ncykaPkMpywQHdbu','Balbino@hotmail.com'),(126,'Balbino','Lopez','$2a$10$QquWsfqDA.zKHmvKF80Y0ek3aoSapgc/bCTQeYXWYzsuM7e7AfQ/2','balbi@gmail.com'),(127,'Jose','Vargas','$2a$10$6E2yg4G0BqoafC/jsvYbxelpzHQUjSSPmcJs/o0mTciM954i/ayCG','Vargas@gmail.com'),(128,'Nacho','Viena','$2a$10$kYwP2VnhUqBMMoLolyVA5eEGq6zieOCkN1U8tkKuk4HVNi/7fFvFa','loco@gomail'),(129,'Nacho','Lopez','$2a$10$h8a9Bh05bqLjZKoP0wMmtuxEhzZHxx7seiuitnSxzao27W/1FmvKm','nacho@hotmail.com'),(130,'Nacho','coñazo','$2a$10$FrpF20FxU/npdR0Jx8WPQ.KYkNsmvKbTC94lYj4jVveUKOarBSZtm','coñazo@hotmail.com'),(131,'asdas','asdaasd','$2a$10$cQkB4v15VnQeSfMUBgrNnuIIs2u/pQE02aiPNiQRxNRYEEDiXKRKG','hola'),(132,'Bea','Lowen','$2a$10$NmIjVJJ1h8SNYH2WBeKm3uihfP.uvqkldyENRnmx0V.WxEgFUPJQ.','hola'),(133,'Balbi','Lopez','$2a$10$jGxbzBGfSFmWGLYEsim23.NUH1/OdtoPWl/ZtqdxbiNJ0eaoNFJh6','lopez@gmail.com'),(134,'Loco','Loco','$2a$10$cKC7eHTym0lNV/b88FY/ce9m9Q9JFoH7Pz6flB/.f1G6OCjILJmVe','Loco.Loco'),(135,'Hola','Hola','$2a$10$AaiQoh7AK2P/rQX7L8EU6eUcYxU5FDWF3uSlf71ybsk8XMlWkyXXq','Hola'),(137,'Balbi','Lopez','$2a$10$jVFGGDIS2ARPVIPIaE8XOeGkTk8qgIMdtIP28t4Nhp31ZSDvFShca','123'),(138,'Nacho','Viano','$2a$10$NkQjTRflXGr7FSxPM0ciIeDVnlQtHkN2IJkGo.SXYtvCk6SrhTA26','Viano'),(139,'Nacho','Nachete','$2a$10$4YDceegaIWp6e8vJ0yjmLuNr6tfEaub5sUkT7GyTmS2/322bleAxK','nach'),(140,'Nach','Guay','$2a$10$2Dsejwpjjj921NWZPYC38uUXvKnSdohT3jpkWVaoBFLlrdWui4ug2','123'),(141,'Nach','loco','$2a$10$JFYU/zVtHvAwOB3d4Mr8muibwdbgLmbT15Jutu0/hm70ZN4OM9UrG','coco'),(142,'Hola','loco','$2a$10$H59gk4S4MM20qq12nIlVdekOO8UiObppb4UEhQYXldRj7uDeshLyC','loco'),(143,'Hola','caracola','$2a$10$z2zZIFyq1uvu3Gum3LqmIOLhky02MxWjjWigdbS5zyG2xlIia.PO2','loco'),(144,'Bal','bal','$2a$10$MgMTiDdoFPNxN58nl28Mfedsk.pauURQwzD/1rYcLAcSsO0WuK4ei','bal'),(145,'adios','adios','$2a$10$pv45.io2vl2.Lkc.xH0o6.mZwwBAaZY3s6L8z9bJJ.M7Rhc7/Yb6q','adios'),(146,'guay','guay','$2a$10$.QfDMfKM9VzSGJRHuXLXfemgtvVVygu/mSrLdHUgsn9d2MIgXGd8C','guay'),(149,'Balbi','Lop','$2a$10$X0uEYbFELnJujbXrIRyAN.Axp91ZRg0Knc2j0HPwpG51MLnfGP05y','lop'),(152,'Fulanito','benganito','$2a$10$gp/UuiF9y27vcDdNpAPHDO1q./0vIasjp70.4DrZ5QPEsOHw/.I8S','fula'),(154,'as','as','$2a$10$yJjKzlgij3.ZFizUUHtK1Oq1Mhkf56kb1sgUmfEiVtNRfYTHEmIwu','as'),(156,'Bea','Bea','$2a$10$el82atXtfQXYZllBJRpaYeDytudDga//ORrlZLUGG5W8Kyx13XA3K','Bea'),(157,'a','A','$2a$10$futio6Whf8z34/h//ySWyeLzNjLWrmZvXht3Dk5SBJQvgFcsDTzey','A'),(158,'Jose','Jose','$2a$10$ig/J0Sogz4sf9X6Llnfu3eJefxGF8sdBgIBVDS/T5SEiKpYkIfRiO','Jose'),(160,'p','p','$2a$10$ya1w3uloXB53L66bUcyl1evvGzjeTo/tYdO80eNes7EvVjXNuc3yi','p'),(161,'Balbino','Lopez','$2a$10$FEUXK/cTXqMJuw6YizLS/eT.TIFDG/mLJV82K5Tb2ErckefXn1n3i','Balbiguitarlive@hotmail.com'),(162,'balbino','lopez','$2a$10$hwPlJz5mCWHwoC0VR0IEKuYDcZlP7Rs/zAYs4FdbiFeoevSFNph5C','Balbiguitarlive@hotmail.com'),(163,'Luis','Ruiz','$2a$10$KFl0dnicfcxw14078pdS1.5gCl9KIcQWoNqt3GcdZmIjYeLdWpoHi','Luis@hotmail.com'),(164,'asda','asd','$2a$10$TnnrJcA/jdhE.2wuNPNDe.oSz6IvQTmXccezD6a4GkmAz67nQ8m1y','asd'),(165,'Luis','luis','$2a$10$w/kRqxDaSs4m0dTeuRncd.704Y1Sl..Sfeb.JIvwubkfXCPv.Zlpm','luis'),(166,'LUIS','LUIS','$2a$10$ripatk.BNaPfO4o2ZnRgSOTacbCHOK2Kn8NI3aN5jkA3fPA4v88.S','LUIS'),(167,'as','as','$2a$10$BpWWlb.sDI1ueOQt6rBSo.hYRHbshMS7X4OCe/oevtw8w/AXOqfh2','as'),(168,'Balbino','Lopez','$2a$10$/ch1rFnP7k0cBnDmkiIvbeX4AR552pZZMjGWKumASBqaAw1sFw7WC','lopez'),(169,'Balbino','Lopez','$2a$10$VaAHen7VRj5odXcUw/jcJOScrryVxgT1zwNHKbM/U9MZ0AHNnfhhy','Lopez'),(170,'ASD','ASD','$2a$10$edO4jhJ5VAQyTy404gXHy.fUGSbMfTVecVwYm9yn/omne.jBcYMUu','ASD'),(171,'Balbino','Lopez','$2a$10$g1mlKFEFrETeXIDceJFKb.gJwVoNAZlNcWqbQ/uwNX6P7h61g7Jii','bal'),(172,'Balbi','Lopez','$2a$10$NP6bs8hfdEVyNR.OMhh8M.5tv26hhRmc5/.NCFQYsqqPAEYfLzYBq','Balbi@com.com'),(173,'Bea','l','$2a$10$cy9vYT9p0O02YFmg15mpMuVZka1orhvsyfFAxdeYwBEeSU1Fn1AoG','l'),(174,'a','a','$2a$10$wzm0gLS5nBsTMT9wi/Kek.msz.pgdnEmi0MQzngktZX3l/G0t36x.','a'),(175,'Balbino','Lopez','$2a$10$5JBoARAc/oG9CmYvBVYMY.Cl6BQUn7NKunQS55UaKdJPJs7cU/HMK','Bal@bal.com'),(176,'Balbino','Lopez','$2a$10$Vk90FTKHAQrYqf/UtnHW5e/nmJJeghVaHgcv90Xc9k15oB/nzu5PK','Lopez@hot.com'),(177,'Balbi','Lopez','$2a$10$WFIKOldKhMhd8JeeJrV9BuI/lm2icd5k6gfMf3LokKKav1iJfo2Cu','balbi.mail.com'),(178,'Balbi','Lopez','$2a$10$jD4JMZNuMbg2xT32Aqeoh.9LBsulH4nwTyh2US4qpxKHNfo5mKcOC','Bal@mail.com'),(179,'Nacho','Viano','$2a$10$YxIVaJcwr9JhQcuWAbF9x.9MTvm2SmbGk55ehs.sDguwTcQWJ8Hi6','viano@mail.com'),(180,'Balbi','Lopez','$2a$10$.AarcThYLdKKmXHTVnRNx./PVkQJSKJ1goRfRKZ.WcJt7bUJFzflq','Bal@mail.com'),(181,'Nacho','Viano','$2a$10$6Mtiv85hEMAZ/suUXaleS.q5k0tTapv8SVdd1cVY5mcZOwz4n/25.','viano@mail.com'),(182,'Balbi','Lopez','$2a$10$CgAs5loVCoFc7VrLrIDzLOYVEz3.k52qhpdFJ3b44b7pN.XZn3Ph6','bal@mail.com'),(183,'Balbi','Lopez','$2a$10$yWyL8C/IhSNUoiZirpoDj.oapWDcRhd8gn/avMDdc9GBjWsMjTUfS','bal@mail.com'),(184,'Balbi','Lopez','$2a$10$TiU57GB2CHQX47sp4k.kpuk0eGnH9pnEpr94pGGqDYZphyvzPdj5y','bal@mail.com'),(185,'Nach','via','$2a$10$ShqC98JxYJUWuokLNVdQuecTHq2ecG4/V1mAqn0.ZkEmgD5ImuXc2','vaino@mail.com'),(186,'Balbino','Lopez','$2a$10$yAtm1PAVyj1QumlGyvQ3yujoU75SXyz2tLCOOJC68K/b6PmynghOy','bal@mail.com'),(187,'Bal','Lopez','$2a$10$IdpXpT.AUB/qPjKORCxe4eXofUfosA74ZxYFm4QXmEyTsLX.2SWgm','bal@mail.com'),(188,'Jose','vargas','$2a$10$AdvvSfPpXR3LVAG/etm9SOeLT65XPg8v2Yqt7ENqOLE3B9iTbc8/m','jose@mail.com'),(190,'Balbi','Lopez','$2a$10$CgukhGhGNZN.vdv5bZA0meHqF9VJpW/x9dyO670wBQcjcVGPurU5a','balbi@mail.com'),(191,'bALBINO','Lopez','$2a$10$oNCI2Qvct7PsTWS4yuvz8eCu12DlNy3yu8zb39Sr2t140H8DPGJRe','balbi@mail.com'),(192,'Balbino','Lopez','$2a$10$6Qh5j1lLwmuoRnZ2tZlWHu.pALM32QQ726AjH1FKD7SgyZVInHCZ.','bal@mail.com');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gymdatabase'
--

--
-- Dumping routines for database 'gymdatabase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-13 16:21:22
