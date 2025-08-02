#include <iostream>

using namespace std;

class Date {
public:
    int day, month, year;

    Date(int d = 1, int m = 1, int y = 2000) {
        day = d;
        month = m;
        year = y;
    }

    bool is_leap(int y) const {
        return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);
    }

    int days_in_month(int m, int y) const {
        if (m == 2) return is_leap(y) ? 29 : 28;
        if (m == 4 || m == 6 || m == 9 || m == 11) return 30;
        return 31;
    }

    Date add_days(int days_to_add) const {
        int d = day + days_to_add, m = month, y = year;

        while (d > days_in_month(m, y)) {
            d -= days_in_month(m, y);
            m++;
            if (m > 12) {
                m = 1;
                y++;
            }
        }
        return Date(d, m, y);
    }

    void display() const {
        cout << day << "-" << month << "-" << year;
    }
};

class PregnancyTracker {
private:
    Date last_period;

public:
    PregnancyTracker(Date lpd) {
        last_period = lpd;
    }

    Date get_due_date() const {
        return last_period.add_days(280); // Naegele's rule
    }

    void show_progress() const {
        cout << "Last Menstrual Period (LMP): ";
        last_period.display();
        cout << endl;

        Date edd = get_due_date();
        cout << "Estimated Due Date (EDD): ";
        edd.display();
        cout << endl;
    }
};

int main() {
    Date lmp(1, 11, 2024);
    PregnancyTracker tracker(lmp);
    tracker.show_progress();

    return 0;
}
