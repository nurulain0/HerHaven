#include <vector>
#include <cmath>
#include <algorithm>
#include <numeric>

class CycleAnalyzer {
private:
    std::vector<int> cycle_lengths;
    double average_cycle;
    double std_dev;
    
public:
    CycleAnalyzer(const std::vector<int>& cycles) : cycle_lengths(cycles) {
        calculate_stats();
    }
    
    void calculate_stats() {
        if (cycle_lengths.empty()) {
            average_cycle = 28.0; // Default average
            std_dev = 2.0; // Default standard deviation
            return;
        }
        
        double sum = std::accumulate(cycle_lengths.begin(), cycle_lengths.end(), 0.0);
        average_cycle = sum / cycle_lengths.size();
        
        double sq_sum = std::inner_product(cycle_lengths.begin(), cycle_lengths.end(), 
                                         cycle_lengths.begin(), 0.0);
        std_dev = std::sqrt(sq_sum / cycle_lengths.size() - average_cycle * average_cycle);
    }
    
    int predict_next_period(int current_day) const {
        return static_cast<int>(std::round(average_cycle - current_day));
    }
    
    std::pair<int, int> predict_fertile_window() const {
        int ovulation_day = static_cast<int>(std::round(average_cycle / 2));
        return {ovulation_day - 3, ovulation_day + 2};
    }
    
    double get_regularity_score() const {
        if (cycle_lengths.size() < 3) return 0.0;
        return (1.0 - (std_dev / average_cycle)) * 100.0;
    }
    
    std::vector<int> detect_anomalies() const {
        std::vector<int> anomalies;
        double lower_bound = average_cycle - 2 * std_dev;
        double upper_bound = average_cycle + 2 * std_dev;
        
        for (size_t i = 0; i < cycle_lengths.size(); ++i) {
            if (cycle_lengths[i] < lower_bound || cycle_lengths[i] > upper_bound) {
                anomalies.push_back(i);
            }
        }
        
        return anomalies;
    }
};