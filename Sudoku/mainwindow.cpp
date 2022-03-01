#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QIntValidator>
#include <QMessageBox>
#include <iostream>
#include <QVector2D>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::Start(){

    ui->x0y0->setEnabled(1);
    ui->x0y0->setInputMask("d");

    ui->x0y1->setEnabled(1);
    ui->x0y1->setInputMask("d");

    ui->x0y2->setEnabled(1);
    ui->x0y2->setInputMask("d");

    ui->x1y0->setEnabled(1);
    ui->x1y0->setInputMask("d");

    ui->x2y0->setEnabled(1);
    ui->x2y0->setInputMask("d");

    ui->x1y1->setEnabled(1);
    ui->x1y1->setInputMask("d");

    ui->x1y2->setEnabled(1);
    ui->x1y2->setInputMask("d");

    ui->x2y1->setEnabled(1);
    ui->x2y1->setInputMask("d");

    ui->x2y2->setEnabled(1);
    ui->x2y2->setInputMask("d");

}

void MainWindow::on_pushButton_clicked()
{
    Start();
}

void MainWindow::on_pushButton_2_clicked()
{
    QMessageBox msg;

    int x0y0 = ui->x0y0->text().toInt();
    int x0y1 = ui->x0y1->text().toInt();
    int x0y2 = ui->x0y2->text().toInt();
    int x1y0 = ui->x1y0->text().toInt();
    int x2y0 = ui->x2y0->text().toInt();
    int x1y1 = ui->x1y1->text().toInt();
    int x1y2 = ui->x1y2->text().toInt();
    int x2y1 = ui->x2y1->text().toInt();
    int x2y2 = ui->x2y2->text().toInt();


    plansza[9] = (x0y0, x0y1, x0y2, x1y0, x2y0, x1y1, x1y2, x2y1, x2y2);

    bool bad = false;


    if(bad == true){
        msg.setText("You falied!");
        msg.exec();
    }else{
        msg.setText("You win!");
        msg.exec();
    }
}

