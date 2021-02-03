switch(evt){
		case 'etat' :
			cout << "event: etat"<<"\n";
			cout << "data: " << "{\"stockage\": { "

					// Stockage libre en Mo(Valeur comprise entre 0 et 100) 
					<<"\"stockLibreMo\" :"<<rand()%101 << ","				

					//Stockage libre en pourcentage(Valeur comprise entre 0 et 100)
					<<"\"stockLibreEnP\" :"<<rand()%101 << "},"			


				//Ouverture de l'objet batterie dans le JSON
				<<"\"batterie\" : {"

					//Le niveau de charge de la batterie en pourcentage(Valeur comprise entre 0 et 100)
					<<"\"niveauDeCharge\" : "<<rand()%101<<","				

					//La tension de sortie de la batterie (Valeur comprise entre 0 et 100)
					<<"\"tension\" : "<<rand()%101<<","				

					//Le courant en sortie de batterie(Valeur comprise entre 0 et 100)
					<<"\"courant\" : "<<rand()%101
					<<"},"


				//Ouverture de l'objet memoire
				<<"\"memoire\" : { "

					//RAM disponible en Mo(Valeur comprise entre 0 et 100) 
					<<"\"memoireDispoMo\" : " 
					<<rand()%101<<","

					//Occupation de la RAM en pourcentage(Valeur comprise entre 0 et 100)
					<<"\"occupMemoire\" : "
					<<rand()%101<<"},"

				//Ouverture de l'objet magneto dans le JSON
				<<"\"magneto\" : {"

					//Le niveau de charge de la batterie en pourcentage(Valeur comprise entre 0 et 100)
					//Magnetomètre
			        <<"\"ValeurMagnetoBX\":"
			        <<premiereValeurMagneto<<","

			        //Magnetomètre
			        <<"\"ValeurMagnetoBY\":"
			        <<deuxiemeValeurMagneto<<","

			        //Magnetomètre
			        <<"\"ValeurMagnetoBZ\":"
			        <<troisiemeValeurMagneto<<"},"

					//Ouverture de l'objet camera
				<<"\"camera\" : { "

					<<"\"InfoCamera1\" : "<<rand()%101<<","

		        	//Caméra
		        	<<"\"InfoCamera2\" : "<<rand()%101
		        	<<"},"
		        //ouverture de l'objet temperature Systeme
		    	<<"\"temperatureSys\" : { "

					//température0
					<< "\"temp\":"
					<< rand()%61<<","

					//température1
					<<"\"temp1\":"
					<<rand()%61<<","

					//température2
					<<"\"temp2\":"
					<<rand()%61<<","

					//temperature3
					<<"\"temp3\":"
					<<rand()%61<<","

					//temperature4
					<<"\"temp4\":"
					<<rand()%61<<"},"
		 
				//cameraIR
				<<"\"cameraIR\":"
				<<rand()%2

	 		<< "}"<<"\r\n\r\n";
			break;
			
		case 'instrument' : 
			for (int i = 0; i < 64; i++){
				arr[i] = number;
				number = rand()%(max-min + 1) + min;
			}		

			
		// for (int i = 0; i < 9 ;i++){		

			cout << "event: instrument"<<"\n";
			cout << "data: "<<"{\"instrument\":{"; 

			cout << "\"matrice\" : ["  ;



			for (int j = 0; j < 64; j++){
				cout << arr[j]<<",";
				if (j == 63){
					cout << arr[j];
				}
			}
			cout <<"]}}" <<"\r\n\r\n";	
			/*min += 10;
			max += 10;
			for (int i = 0; i < 64; i++){
				arr[i] = number;
				number = rand()%(max-min + 1) + min;
			}*/
		// }
			break;
		default :
			//code here
			break; 
	}

}