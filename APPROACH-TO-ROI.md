# Approach to ROI Computation in the Assistive Technology Simulator

## Overview
Return on Investment (ROI) is a critical metric used in the Assistive Technology (AT) Simulator to evaluate the financial efficiency of repairing or replacing assistive technology. This document outlines the approach we have adopted for ROI computation, provides justifications for the methodology, and considers alternate approaches, explaining why they were not chosen.

---

## ROI Computation: Current Methodology

### Formula
```
ROI = (Savings / Total Cost With Replacement) × 100
```

Where:
- **Savings**:
  ```
  Savings = Total Cost Without Replacement - Total Cost With Replacement
  ```
  - **Total Cost Without Replacement**: The cumulative cost of daily living assistance during the failure-to-replacement period without repairing or replacing the AT.
  - **Total Cost With Replacement**: The cumulative cost of typical daily living assistance during the failure-to-replacement period, including the cost of repairing or replacing the AT.

---

## Why Include Both Daily Living Costs and Repair/Replacement Costs?

### 1. Comprehensive Representation of Costs

**Total Cost With Replacement** includes:
- The cost of typical daily living assistance (unchanged by AT replacement).
- The one-time cost of repairing or replacing the AT.

#### Justification:
- **Ongoing Support Costs**: Even after AT is replaced, daily living assistance costs persist and are part of the real financial burden.
- **Realistic Financial Assessment**: Ignoring these costs would understate the true expenditure in the replacement scenario, misrepresenting the trade-offs.

### 2. Aligning ROI with Real-World Decision-Making
- Stakeholders need to assess the **entire cost of action**, not just the isolated expense of replacing AT.
- This approach enables decision-makers to understand the **efficiency of replacing AT in the context of all associated costs**.

### 3. Preventing ROI Inflation
- Using only the repair/replacement cost as the denominator would artificially inflate ROI, providing a misleading picture of the intervention's efficiency.

---

## Alternate Approaches and Their Limitations

### Approach 1: Using Only the Repair/Replacement Cost
#### Formula:
```
ROI = (Savings / Repair/Replacement Cost) × 100
```

#### Why This Was Not Adopted:
1. **Inflates ROI**: Excludes ongoing daily living costs, making the replacement scenario appear more efficient than it is in practice.
2. **Unrealistic Representation**: Ignores the financial reality that daily living support costs continue post-replacement.
3. **Narrow Focus**: Fails to account for the broader financial trade-offs, reducing its applicability for comprehensive decision-making.

### Approach 2: Using the Cost Without Replacement as the Denominator
#### Formula:
```
ROI = (Savings / Total Cost Without Replacement) × 100
```

#### Why This Was Not Adopted:
1. **Misaligned with ROI Principles**:
   - ROI traditionally measures efficiency relative to the resources spent. Using the cost without replacement as the denominator shifts focus away from the proactive intervention.
2. **Overstates Impact**:
   - Savings are compared to a scenario that was deliberately avoided, making the replacement option seem overly advantageous.

---

## Example Computation

### Scenario Inputs:
- **Daily Living Assistance Costs**:
  - Weekday: $64/hour
  - Saturday: $90/hour
  - Sunday: $70/hour
  - Typical hours: 6/day
  - Additional hours during failure: 4/day
- **Failure Period**: 30 days
- **Replacement Cost**: $5,000

### Calculations:
1. **Typical Daily Cost**:
```
Typical Daily Cost = ((64 × 5) + 90 + 70) × 6 ÷ 7 = $411.43
```

2. **Additional Daily Cost During Failure**:
```
Additional Daily Cost = ((64 × 5) + 90 + 70) × 10 ÷ 7 = $685.71
```

3. **Cumulative Costs**:
   - **Without Replacement**: $685.71 × 30 = $20,571.30
   - **With Replacement**: ($411.43 × 30) + $5,000 = $17,342.90

4. **Savings**:
```
Savings = 20,571.30 - 17,342.90 = 3,228.40
```

5. **ROI**:
```
ROI = (3,228.40 / 17,342.90) × 100 = 18.62%
```

---

## Conclusion
The adopted ROI computation method provides:
1. **Comprehensive Cost Accounting**: By including both replacement and ongoing support costs.
2. **Realistic Decision Support**: Reflecting the true financial impact of proactive AT repair or replacement.
3. **Alignment with Financial Standards**: Measuring ROI relative to the total cost in the replacement scenario ensures consistency with traditional ROI metrics.

Alternate approaches, while simpler, fail to capture the full financial picture or align with stakeholder needs. The current methodology, while conservative, provides actionable insights that better support evidence-based decision-making.

---


