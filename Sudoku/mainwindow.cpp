#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QIntValidator>
#include <QMessageBox>
#include <iostream>

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

}

