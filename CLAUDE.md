# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Run Commands
- Build and run app: `xcodebuild -scheme PocketSous -configuration Debug build`
- Run on simulator: `xcodebuild -scheme PocketSous -destination 'platform=iOS Simulator,name=iPhone 15' run`
- To reset database: Add `--resetDatabase` command-line argument

## Code Style Guidelines
- Import organization: Group by system frameworks first, then third-party
- Use `final` for classes that aren't meant to be subclassed
- Mark sections with `// MARK: - Section Name` comments
- Use SwiftUI previews for view components
- Use descriptive accessibility labels for UI elements
- Model naming: Suffix data models with "JSON" for JSON models
- Error handling: Use enum-based custom errors and Result type
- Use extensions to organize large view components
- Documentation: Add doc comments for public methods and types
- Use trailing closures for SwiftUI view modifiers
- Prefer native SwiftUI components over UIKit when possible