#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# ============================================================================
#     IMPORT
# ============================================================================
import sys
import os
import glob
import subprocess
import ipaddress
import re
import csv
import datetime

# ============================================================================
#     FONCTIONS MENU
# ============================================================================

# Main menu
def main_menu():

    global salon
    salon = choix_salon()

    global plage_ip
    if salon == "VswS1": plage_ip = "10.10.13.0/24"
    elif salon == "VswS2": plage_ip = "10.10.14.0/24"

    conf_before()  # Vérification de l'existance d'un conf précédente
    # Connexion SSH pour récupérer le catalogue de VM + Vswitch + PortGroup
    catalogue_vm_clone , listVswitch , listPortGroup = recup_var_connexion_ssh()

    conf_ansible=[] # Sauvegarde des confs ansible
    listVswitch_conf = []
    listPortGroup_conf = []

    ###### RECUP ANCIENNE CONF ######
    listClient_tmp , conf_ansible_tmp= recup_ancienne_conf(listClient,conf_ansible)
    
    #Actualisation des listes
    conf_ansible = conf_ansible_tmp



    while True:
        print("\n======= Déploiement HelloPlateforme =======")
        print("\n---------------------------------")
        print("|    Plage IP : "+plage_ip+"   |")
        print("---------------------------------\n")

        print("1° Création du service frontal")
        print("2° Affichage de la conf du service frontal\n")

        print("3° Création VM")
        print("4° VM configurées")
        print("5° Supprimer une conf")
        print("6° Catalogue de nos VM templates\n")

        print("7° Configurer les VM (Ansible)")
        print("8° Configuration Ansible des VM")
        print("9° Supprimer une configuration Ansible\n")


        print("10° Suppression de la configuration précédente sur l'ESXI")

        print("\n99° LANCEMENT")
        print("\n0° Quit")

        while True:
            try:
                choice = int(input(">>  "))
                break
            except ValueError:
                print("Veuillez entrer un chiffre ...")
        if choice == 1:
            menu1(, listClient, catalogue_vm_clone,listVswitch,listPortGroup,salon)
        elif choice == 2:
            menu2(listClient)
        elif choice == 3:
            menu3(listAD, catalogue_vm_clone,listClient,listVswitch,listPortGroup,salon)
        elif choice == 4:
            menu4(listAD, listClient, catalogue_vm_clone,listVswitch,listPortGroup,salon)
        elif choice == 5:
            menu5(listAD, listClient)
        elif choice == 6:
            menu6(listAD, listClient, conf_sonde, conf_vuln, conf_ansible)
        elif choice == 7:
            menu7(catalogue_vm_clone)
        elif choice == 8:
            menu8(listAD, listClient,conf_ansible)
        elif choice == 9:
            menu9(conf_ansible)
        elif choice == 10:
            menu10(conf_ansible,listAD,listClient)
        elif choice == 11:
            menu11(listAD,listClient,conf_vuln,conf_sonde)
        elif choice == 12:
            menu12()

        elif choice == 99:
            fin = menu99(listClient,listAD)
            if fin == 1: break
        elif choice == 0:
            exit()
        else:
            print("\nSelection Invalide. Recommencez\n")

        ###### SAVE CONF #####
        save_nouvelle_conf(listAD,listClient,conf_ansible,listVswitch_conf,listPortGroup_conf,conf_vuln,conf_sonde)
