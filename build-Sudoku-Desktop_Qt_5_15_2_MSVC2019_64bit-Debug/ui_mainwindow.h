/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.15.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QWidget *gridLayoutWidget;
    QGridLayout *gridLayout;
    QLineEdit *x1y2;
    QLineEdit *x0y0;
    QLineEdit *x0y1;
    QLineEdit *x0y2;
    QLineEdit *x1y0;
    QLineEdit *x1y1;
    QLineEdit *x2y0;
    QLineEdit *x2y1;
    QLineEdit *x2y2;
    QPushButton *pushButton;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QString::fromUtf8("MainWindow"));
        MainWindow->resize(800, 600);
        MainWindow->setStyleSheet(QString::fromUtf8("QMainWindow {\n"
"background-color: red;\n"
"}"));
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        gridLayoutWidget = new QWidget(centralwidget);
        gridLayoutWidget->setObjectName(QString::fromUtf8("gridLayoutWidget"));
        gridLayoutWidget->setGeometry(QRect(10, 10, 261, 311));
        gridLayout = new QGridLayout(gridLayoutWidget);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        gridLayout->setContentsMargins(0, 0, 0, 0);
        x1y2 = new QLineEdit(gridLayoutWidget);
        x1y2->setObjectName(QString::fromUtf8("x1y2"));
        x1y2->setEnabled(false);
        QFont font;
        font.setPointSize(20);
        x1y2->setFont(font);
        x1y2->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x1y2, 5, 3, 1, 1);

        x0y0 = new QLineEdit(gridLayoutWidget);
        x0y0->setObjectName(QString::fromUtf8("x0y0"));
        x0y0->setEnabled(false);
        x0y0->setFont(font);
        x0y0->setLayoutDirection(Qt::RightToLeft);
        x0y0->setMaxLength(1);
        x0y0->setCursorPosition(0);
        x0y0->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x0y0, 3, 2, 1, 1);

        x0y1 = new QLineEdit(gridLayoutWidget);
        x0y1->setObjectName(QString::fromUtf8("x0y1"));
        x0y1->setEnabled(false);
        x0y1->setFont(font);
        x0y1->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x0y1, 4, 2, 1, 1);

        x0y2 = new QLineEdit(gridLayoutWidget);
        x0y2->setObjectName(QString::fromUtf8("x0y2"));
        x0y2->setEnabled(false);
        x0y2->setFont(font);
        x0y2->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x0y2, 5, 2, 1, 1);

        x1y0 = new QLineEdit(gridLayoutWidget);
        x1y0->setObjectName(QString::fromUtf8("x1y0"));
        x1y0->setEnabled(false);
        x1y0->setFont(font);
        x1y0->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x1y0, 3, 3, 1, 1);

        x1y1 = new QLineEdit(gridLayoutWidget);
        x1y1->setObjectName(QString::fromUtf8("x1y1"));
        x1y1->setEnabled(false);
        x1y1->setFont(font);
        x1y1->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x1y1, 4, 3, 1, 1);

        x2y0 = new QLineEdit(gridLayoutWidget);
        x2y0->setObjectName(QString::fromUtf8("x2y0"));
        x2y0->setEnabled(false);
        x2y0->setFont(font);
        x2y0->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x2y0, 3, 4, 1, 1);

        x2y1 = new QLineEdit(gridLayoutWidget);
        x2y1->setObjectName(QString::fromUtf8("x2y1"));
        x2y1->setEnabled(false);
        x2y1->setFont(font);
        x2y1->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x2y1, 4, 4, 1, 1);

        x2y2 = new QLineEdit(gridLayoutWidget);
        x2y2->setObjectName(QString::fromUtf8("x2y2"));
        x2y2->setEnabled(false);
        x2y2->setFont(font);
        x2y2->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(x2y2, 5, 4, 1, 1);

        pushButton = new QPushButton(centralwidget);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(680, 10, 91, 41));
        pushButton->setFont(font);
        MainWindow->setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar->setObjectName(QString::fromUtf8("menubar"));
        menubar->setGeometry(QRect(0, 0, 800, 20));
        MainWindow->setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName(QString::fromUtf8("statusbar"));
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "MainWindow", nullptr));
        x1y2->setText(QString());
        x0y0->setText(QString());
        x0y1->setText(QString());
        x0y2->setText(QString());
        x1y0->setText(QString());
        x1y1->setText(QString());
        x2y0->setText(QString());
        x2y1->setText(QString());
        x2y2->setText(QString());
        pushButton->setText(QCoreApplication::translate("MainWindow", "Start", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
