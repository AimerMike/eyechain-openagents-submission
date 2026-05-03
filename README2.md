# EyeChain

EyeChain is a consent-based eye-health evidence network built on Avalanche Fuji Testnet. It allows users to register eye-health evidence, choose whether the evidence stays private or becomes shared, and enables appraised shared evidence to be grouped into cohort-level datasets that researchers or institutions can license through on-chain transactions.

## Problem

Eye-health data is fragmented across clinics, PDFs, screenshots, prescriptions, check-up records, self-reported symptoms, surgical history, and personal devices. Patients rarely have a simple way to control whether their eye-health records are private or shared, while researchers and builders often lack consented, traceable, cohort-level real-world evidence.

Eye health is also a large and growing global problem. WHO estimates that at least 2.2 billion people live with near or distance vision impairment, and at least 1 billion cases could have been prevented or are still unaddressed. Refractive errors and cataracts are among the leading causes of vision impairment and blindness. Myopia is also projected to affect roughly half of the world population by 2050, with high myopia projected to affect about 10%. 

## Solution

EyeChain creates a minimum viable flow for user-consented eye-health evidence:

1. Users connect a wallet.
2. Users register and submit eye-health evidence.
3. Users choose whether the evidence is private or shared.
4. Shared evidence can be appraised and assigned quality metadata.
5. Admins can group eligible evidence into cohorts.
6. Researchers or institutional buyers can approve MockUSDC and purchase a cohort license on-chain.

The current hackathon demo uses synthetic or self-declared non-diagnostic sample data only. EyeChain does not diagnose disease and does not put sensitive raw medical records on-chain.

## Why Now

The market is moving toward real-world evidence, participant-consented research data, and AI-ready health datasets. FDA maintains real-world data and real-world evidence resources for regulatory decision-making, and NIH’s All of Us program shows the importance of participant-contributed health data for precision medicine research.

However, most user-facing health-data systems do not offer a lightweight, transparent, programmable consent and licensing mechanism. EyeChain explores how blockchain can support evidence provenance, consent state, reward logic, quality metadata, and cohort-level licensing without exposing raw sensitive data on-chain.

## Target Users

### Supply Side

- People with high myopia
- People with recurring eye exams
- People with post-surgery recovery history
- People with family history of eye disease
- People with long-term screen fatigue or eye discomfort
- People interested in structured eye-health self-recording

For the hackathon demo, all evidence can be synthetic, self-declared, or sample data. No real medical records are required.

### Demand Side

- Vision science researchers
- Academic labs studying myopia, retina, eye fatigue, surgery recovery, or population eye-health trends
- AI builders needing consented and traceable eye-health data
- Eye-care startups and digital health companies
- DeSci communities exploring participant-owned research data
- Institutions interested in privacy-aware real-world evidence infrastructure

## Market Hypothesis

If users can keep raw eye-health data private while sharing hashes, consent status, metadata, and quality scores on-chain, then researchers and builders can license cohort-level evidence with better provenance and consent traceability.

EyeChain does not claim clinical validation at the hackathon stage. The current validation focuses on:

1. Wallet UX
2. Consent UX
3. Evidence submission flow
4. Shared/private state changes
5. Admin cohort creation
6. Buyer approve + purchase license flow
7. Early user feedback on trust, clarity, and willingness to contribute

## How It Works

### M1: Evidence Contribution

Users submit eye-health evidence and choose whether it is private or shared. The system records evidence metadata, consent status, quality score, and data class.

### M2: Cohort Licensing Exchange

Admins create cohorts from shared, appraised, quality-qualified evidence. Buyers approve MockUSDC and purchase a cohort license. This demonstrates a possible business model for user-consented eye-health evidence licensing.

### Future M3: Sponsor Missions

Future versions can add sponsor-defined missions, such as “submit monthly high-myopia tracking evidence” or “contribute post-surgery recovery check-ins,” with rewards and cohort formation logic.

## What Is On-Chain

- Wallet registration
- Evidence ownership
- Shared/private consent state
- Evidence metadata
- Data class
- Quality score
- Cohort metadata
- License purchase transaction
- Payment flow

## What Should Stay Off-Chain

- Raw medical records
- Eye images
- Prescription PDFs
- Real patient identity
- Sensitive diagnostic reports
- Any private health data that should remain encrypted or user-controlled

## Demo Flow

### Patient / Contributor

1. Connect wallet
2. Switch to Avalanche Fuji
3. Register
4. Submit sample eye-health evidence
5. Choose private or shared
6. View evidence status

### Admin / Curator

1. Review shared evidence inventory
2. Create a cohort
3. Add eligible evidence to the cohort
4. Verify quality score and data class

### Buyer / Researcher

1. Select a cohort
2. Approve MockUSDC
3. Purchase license
4. View transaction on Snowtrace

## Hackathon Scope

This is a solo-built hackathon MVP. The current goal is not to claim medical adoption or clinical validation. The goal is to prove that a consent-based eye-health evidence flow can be represented on-chain and extended into a cohort licensing exchange.

## Safety and Ethics

EyeChain is not a diagnostic product. It does not provide medical advice. It does not require real medical records for the demo. Sensitive raw health data should remain off-chain. The on-chain layer demonstrates consent, provenance, rewards, metadata, and licensing.